const server = require("mongoose")
const url = "mongodb://127.0.0.1:27017/test"


//exporting the connection
module.exports.connect = ()=>{
    server.connect(url)
}
