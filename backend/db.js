const server = require("mongoose")
const url = "mongodb://localhost:27017/test"


//exporting the connection
module.exports.connect = ()=>{
    server.connect(url)
}
