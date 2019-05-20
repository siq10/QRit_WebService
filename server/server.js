const express = require('express');
const cors = require("cors");
const fs = require('fs');
const https = require('https');
const webpush = require('web-push');

var certOptions = {
    key: fs.readFileSync('certs/server.key'),
    cert: fs.readFileSync('certs/server.crt'),
    ca: fs.readFileSync("certs/ca.pem"),
    requestCert: true,
    rejectUnauthorized: false
}

const publicVapidKey = "BHKYhmiTHfLUHeC360qI6aCS5w8d87sZdG4bbiWtbv2az4IBtDFAtu2jYSsKctfbWSPp-FNvfqeFrH1toH9gm64"
const privateVapidKey = "SC8zk9tKGHt7MXGRO3ADcEkCm3GACWweMKoZA57roSc"

webpush.setVapidDetails("mailto:SerBronn@Flummery.Blackwater",publicVapidKey,privateVapidKey)

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

const subscriptions  = require('./routes/api/subscriptions');
app.use('/api/subscriptions',subscriptions);

const users = require('./routes/api/users');
app.use('/api/users',users);

const places = require('./routes/api/places');
app.use('/api/places',places);

const qrs = require('./routes/api/qrs');
app.use('/api/qrs',qrs);

// Changes needed for production
if (process.env.NODE_ENV === "production")
{
    app.use(express.static(__dirname + '/public'))

    app.get(/.*/, (req,res) => res.sendFile(_dirname + '/public/index.html'))
}
const port = process.env.PORT || 5000;


var server = https.createServer(certOptions, app).listen(port, () => console.log("Server started on port " + port));