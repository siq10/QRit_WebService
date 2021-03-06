const express = require('express');
const cors = require("cors");
const http = require('http');
const webpush = require('web-push');


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


const tables = require('./routes/api/tables');
app.use('/api/tables',tables);


const orders = require('./routes/api/orders');
app.use('/api/orders',orders);

const qrs = require('./routes/api/qrs');
app.use('/api/qrs',qrs);

const auths  = require('./routes/api/auths');
app.use('/api/auths',auths);

const menus  = require('./routes/api/menus');
app.use('/api/menus',menus);


// Changes needed for production
if (process.env.NODE_ENV === "production")
{
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
}
else
    {
    app.get(/.*/, (req,res) => {
        app.use(express.static(__dirname + '/public/'));
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello there!");
        res.end();
    })
}


const port = process.env.PORT || 5000;

var server = http.createServer(app).listen(port, () => console.log("Server started on port " + port));