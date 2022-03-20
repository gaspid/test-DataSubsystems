import axios from"axios"

export const startOperation= async(CardNumber,cvv,ExpDate,Amount)=>{
    try{
        const response =await axios.post('http://localhost:5050/api/regist',{
        CardNumber,
        cvv,
        ExpDate,
        Amount,
    })
        console.log(response.data)
    }
    catch(e){
        alert(e)
    }
}