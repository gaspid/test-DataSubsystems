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
                        <div className='CardNumber'>
                                 <input   type='text'onBlur={e=>CardNumber.onBlur(e)} onChange={(e)=>CardNumber.onChange(e)} value={CardNumber.value} maxLength="16" placeholder='0000 0000 0000 0000' />
                       </div>


                       <div className='mExpDate'>
                                 <input   type='text'onBlur={e=>mExpDate.onBlur(e)} onChange={(e)=>mExpDate.onChange(e)} value={mExpDate.value} maxLength="2" placeholder='MM' />
                       </div>

                        <div className='eExpDate'> 
                                 <input   type='text'onBlur={e=>eExpDate.onBlur(e)} onChange={(e)=>eExpDate.onChange(e)} value={eExpDate.value} maxLength="4" placeholder='EEEE' />
                        </div>

                        <div className='cvv'>
                                 <input  type='text'onBlur={e=>cvv.onBlur(e)} onChange={(e)=>cvv.onChange(e)} value={cvv.value} maxLength="3"placeholder='cvv' />
                        </div>

                        <div className='Amount'>
                                 <input   type='text'onBlur={e=>Amount.onBlur(e)} onChange={(e)=>Amount.onChange(e)} value={Amount.value} placeholder='Amount' />
                        </div>
                      
                       
                        
                        
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