const express = require("express");
const axios = require("axios");
const authsURL = "http://127.0.0.1:8000/api/authentication/"

const router = express.Router();

const postRequest = (auth) => {
    try {
        console.log(auth)
        return axios.post(authsURL,auth)
    } catch (error) {
        // console.error(error)
    }
}

router.post('/',async (req,res) =>{
    try{
        var response = await postRequest(req.body)
        console.log(response.data)
        res.status(201).send(response.data)
    }
    catch(err)
    {
        console.log(err.message)
        res.status(422).send()
    }
})
module.exports = router;