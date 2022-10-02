const server = require("mongoose")
const url = "mongodb://localhost:27017/test"

module.exports.connect = ()=>{
    server.connect(url)
}
