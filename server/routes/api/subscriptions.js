const express = require("express");
const router = express.Router();
const webpush = require('web-push');

router.post('/',async (req,res) =>{
    console.log(req.body)
        const subscription = req.body;
        res.status(201).json({})
        const payload = JSON.stringify({title: "Push resource test"})
        webpush.sendNotification(subscription, payload).catch(err => console.error(err))
})
module.exports = router;