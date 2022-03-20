const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const operRouter= require('./mongo/Card.route')
const corsMIDD= require('./middelware/cors.middleware')

const app = express()
const PORT =  config.get("serverPORT")

app.use(corsMIDD)
app.use(express.json())
app.use('/api',operRouter)

async function start(){
    try{
        await mongoose.connect(config.get("getURL"))
        app.listen(PORT,()=>{console.log('server start')})

    }catch(e){
        console.log(e)
    }
}

start()