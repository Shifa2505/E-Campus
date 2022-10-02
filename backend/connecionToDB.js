// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017/"
// const conn = new MongoClient(url)
// async function trial(){

//     try{
//         await conn.connect()
//         await conn.db("test").collection('users').insertOne({name:"Bhakti Bhosale"})
//         let x = await conn.db("test").collection('users').find()
//         console.log(x)
//     }
    
//     finally{
//         await conn.close()
//         console.log("connection closed")
//     }
// }
// trial()

// const mongo = require('mongoose')
// mongo.connect("mongodb://localhost:27017/test").catch(err=>console.log(err))
// console.log("connection is succesful")
// mongo.close()
// console.log("connection is closed")

const db = require("./db")
function connection(){
    try{
        db.connect()
        console.log("connection is done")
    }
    catch(err){
        console.log(err.message)
    }

}