const express = require("express");
const axios = require("axios");
const router = express.Router();
const qrsURL = "http://127.0.0.1:8000/api/qrs/"

const getRequest = () => {
    try {
        return axios.get(qrsURL,{
            timeout: 30000});
    } catch (error) {
        console.error("hmm")
    }
}

const getByIdRequest = (id) => {
    try {
        return axios.get(qrsURL + id,{
            timeout: 30000});
    } catch (error) {
        console.error("hmm")
    }
}

const putRequest = (user) => {
    try {
        // console.log(user)
        return axios.post(qrsURL,user)
    } catch (error) {
        // console.error(error)
    }
}
router.get('/:id', (req,res) => {
    getByIdRequest(req.params.id).then(response => {
        if(response.data)
            console.log("yup")
        else(console.log("nope"))
        res.send(response.data);
    },(reason) =>
    {console.log(reason)} )
})


router.get('/', (req,res) => {
    getRequest(req,res).then(response => {
        if(response.data)
            console.log("yup")
        else(console.log("nope"))
        res.send(response.data);
    },(reason) =>
    {console.log(reason)} )
})

router.post('/',async (req,res) =>{
    try{
        var response = await postRequest(req.body)
        console.log(response)
        res.status(201).send()
    }
    catch(err)
    {
        console.log(err)
        res.status(422).send()
    }
})
module.exports = router;