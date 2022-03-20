const {Schema,model,ObjectId}= require('mongoose')

const Card =new Schema({
    CardNumber:{type:String,required:true},
    cvv:{type:String,required:true}, 
    ExpDate:{type:String,required:true},
    Amount:{type:String,required:true},
    files:[{type:ObjectId,ref:'File'}]
    
})

module.exports = model('Card',Card)