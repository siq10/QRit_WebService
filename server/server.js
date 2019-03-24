const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());

const users = require('./routes/api/users');

app.use('/api/users',users);

// Changes needed for production
if (process.env.NODE_ENV === "production")
{
    app.use(express.static(__dirname + '/public'))

    app.get(/.*/, (req,res) => res.sendFile(_dirname + '/public/index.html'))
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
