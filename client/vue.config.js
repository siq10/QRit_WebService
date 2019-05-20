const path = require('path');
const fs = require('fs');

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),
    devServer: {
    	host: 'localhost',
        https: {
            cert: fs.readFileSync("../certs/server.crt"),
            key: fs.readFileSync("../certs/server.key"),
            ca: fs.readFileSync("../certs/ca.pem")
        },
        proxy:{
            '/api':{
                target:'https://localhost:5000',
                 ws: true,
                 
            }
        }
    }
}
