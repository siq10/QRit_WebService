const express = require("express");
const axios = require("axios");
const productsURL = "http://127.0.0.1:8000/api/products/"
const router = express.Router();

const getByIdRequest = (req) => {
    try {
        return axios.get(productsURL,{"headers":{"Authorization":req.headers.authorization }});
    } catch (error) {
        console.error(error.message)
    }
}
router.get('/', (req,res) => {
    getByIdRequest(req).then(response => {
        if(response.data)
            console.log("yup")
        else(console.log("nope"))
        if(response.headers.authorization)
            res.header("Authorization", response.headers.authorization)
        res.send(response.data);
    },(reason) =>
    {console.log(reason)} )
})
module.exports = router;