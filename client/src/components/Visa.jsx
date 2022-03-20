import React,{useState,useEffect} from 'react';
import Box  from '@mui/material/Box';
import {CardInput} from './hooks/useHook'
import {startOperation} from "./api/axios"



const Visa = () => {    

    const [ExpDate,setExpDate]=useState('')
    const [jsonl,setJsonl]=useState({})
    

    const CardNumber = CardInput('',{isEmpty:true,isLengt:16,isNumber:true})
    const cvv= CardInput('',{isEmpty:true,isLengt:3,isNumber:true})
    const mExpDate= CardInput('',{isEmpty:true,isLengt:2,isNumber:true})
    const eExpDate= CardInput('',{isEmpty:true,isLengt:4,isNumber:true})
    const Amount= CardInput('',{isEmpty:true,isNumber:true})
    
    useEffect(()=>{
        setExpDate(mExpDate.value+'/'+eExpDate.value)
        setJsonl({
            CardNumber:CardNumber.value,
            ExpDate:ExpDate,
            cvv:cvv.value,
            Amount:Amount.value,

        })
    },[mExpDate.value,eExpDate.value,ExpDate,cvv.value,Amount.value])
   

    return (
        <div>
                <Box sx={{
                    width: 300*2,
                    height: 175*2,
                    border: '2px solid #856868',
                    borderRadius:5,
                    }}>
                        {(CardNumber.isDerty&& CardNumber.isLengt) && <div style={{color:'red'}}>!!</div>}
                        <input type='text'onBlur={e=>CardNumber.onBlur(e)} onChange={(e)=>CardNumber.onChange(e)} value={CardNumber.value} maxLength="16" va placeholder='0000 0000 0000 0000'  />
                      
                        {(mExpDate.isDerty&& mExpDate.isLengt) && <div style={{color:'red'}}>!!</div>}   
                        <input  type='text'onBlur={e=>mExpDate.onBlur(e)} onChange={(e)=>mExpDate.onChange(e)} value={mExpDate.value} maxLength="2" placeholder='MM' />
                      
                        {(eExpDate.isDerty&& eExpDate.isLengt) && <div style={{color:'red'}}>!!</div>}
                        <input  type='text'onBlur={e=>eExpDate.onBlur(e)} onChange={(e)=>eExpDate.onChange(e)} value={eExpDate.value} maxLength="4" placeholder='EEEE' />
                      
                        {(cvv.isDerty&& cvv.isLengt) && <div style={{color:'red'}}>!!</div>}
                        <input  type='text'onBlur={e=>cvv.onBlur(e)} onChange={(e)=>cvv.onChange(e)} value={cvv.value} maxLength="3"placeholder='cvv' />
                      
                        {(Amount.isDerty&& Amount.isLengt) && <div style={{color:'red'}}>!!</div>}
                        <input   type='text'onBlur={e=>Amount.onBlur(e)} onChange={(e)=>Amount.onChange(e)} value={Amount.value} maxLength="16" placeholder='Amount' />
                </Box>
                <button 
                    disabled={!CardNumber.valid||!mExpDate.valid||!eExpDate.valid||!cvv.valid||!Amount.valid}

                    onClick={()=>startOperation(CardNumber.value,cvv.value,ExpDate,Amount.value)}
                >Button</button>

                    
                <pre>{JSON.stringify(jsonl)}</pre>

                
        </div>
    );
};

export default Visa;