const express = require("express");
const axios = require("axios");
const router = express.Router();
const usersURL = "http://127.0.0.1:8000/api/users/"
// const getBreeds = () => {
//     try {
//         return axios.get('https://dog.ceo/api/breeds/list/all')
//     } catch (error) {
//         console.error(error)
//     }
// }

const getfromlaravel = () => {
    try {
        return axios.get('http://127.0.0.1:8000/api/test')
    } catch (error) {
        console.error("No connection to the database yet\n" + error)
    }
}
const postRequest = (user) => {
    try {
        // console.log(user)
        return axios.post(usersURL,user)
    } catch (error) {
        // console.error(error)
    }
}
router.get('/', (req,res) => {
    getfromlaravel(req,res).then(response => {
        if(response.data)
            console.log(response.data)
        res.send(response.data);
    },(reason)=>console.log(reason))
})

router.post('/',async (req,res) =>{
    try{
        var response = await postRequest(req.body)
        console.log(req.body)
        res.status(201).send()
    }
    catch(err)
    {
        console.log(err)
        res.status(422).send()
    }
})
module.exports = router;