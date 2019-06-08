const express = require("express");
const axios = require("axios");

const router = express.Router();

const getfromlaravel = (req,res) => {
    try {
        if(req.query.placeid)
        return axios.get('http://localhost:8000/api/places/'+req.query.placeid,{"headers":{"Authorization":req.headers.authorization }})
        else
        return axios.get('http://localhost:8000/api/places/',{"headers":{"Authorization":req.headers.authorization }})
    } catch (error) {
        console.error(error)
    }
}
router.get('/', (req,res) => {
    getfromlaravel(req,res).then(response => {
        if(response.data)
            console.log(response.data)
        if(response.headers.authorization)
        res.header("Authorization", response.headers.authorization)
        res.send(response.data);
    }).catch((e)=>{
        console.log(e);
        res.send(e.message);})
})
module.exports = router;