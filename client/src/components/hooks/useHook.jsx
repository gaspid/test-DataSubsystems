import {useState,useEffect} from 'react'

export const CardInput= (initValue,validation) =>{
    const [value,setValue] = useState(initValue)
    const [isDerty,setDerty] = useState(false)
    const valid = CardValidation (value,validation)

    const onChange =(e)=>{setValue(e.target.value)}
    const onBlur =(e)=>setDerty(true)
    return {value,onChange,onBlur,...valid,isDerty}
}

export const CardValidation=(value,validations) =>{
    const [isEmpty, setEmty] = useState(true)
    const [isLengt,setLengt] = useState(false)
    const [valid,setValid] = useState(false)
    const [isNumber,setNumber] = useState(false)

    useEffect(()=>{
        for(const validation in validations){
            switch(validation){
                case "isLengt":
                    value.length!==validations[validation]?setLengt(true):setLengt(false)
                    break;
                case "isEmpty":
                    value ? setEmty(false) : setEmty(true)
                    break;
                case "isNumber":
                    const re= /^\d+$/
                    re.test(String(value).toLocaleLowerCase())?setNumber(false):setNumber(true)
                    break;
                    default:
    }
        }
    }, [value,validations])

    useEffect(()=>{
        if (isEmpty||isLengt||isNumber){
            setValid(false)
        }  else {
            setValid(true)
        }

    },[isEmpty,isLengt,isNumber])

    return {
        isEmpty,isLengt,valid,isNumber
    }
}
   