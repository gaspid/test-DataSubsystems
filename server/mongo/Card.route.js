const Router = require("express");
const Card = require("./Card")
const router = new Router()

router.post('/regist',

    async (req, res) => {
    try {
        console.log(req.body)
        const {CardNumber, cvv,ExpDate,Amount} = req.body;

        const CarOperatoin = new Card({CardNumber,cvv,ExpDate,Amount})
        await CarOperatoin.save()
        return res.json({RequestId:Math.floor(Math.random() * 100000000),Amount:req.body.Amount})

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})


module.exports = router