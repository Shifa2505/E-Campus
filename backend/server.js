// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//   }
  
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
// const router = require("./routers");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const models = require("./models")
const db = require("./db");
db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

// app.use("/api", router);
// app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../frontend/build")));

// app.get("*", (req, res) => {
//   try {
//     res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
//   } catch (e) {
//     res.send("Welcome to E-Campus");
//   }
// });



app.post("/login",(req,res)=>{
  // console.log(req.body.uname_input)
  // console.log(req.body.pwd_input)
  let check = models.userModel.find({username:req.body.username,password:req.body.password})
  // console.log(check)
  check.then((data)=>{
    console.log(data[0])
    if(data[0]!==undefined){
      res.redirect("http://localhost:3000/home")
      // return
    }
    else{
      res.redirect("http://localhost:3000/")

    }
  })
  // res.send("alert('no user available'); window.location.href = 'http://localhost:3000/'; ");

})

app.post("/newUser",(req,res)=>{
  let newUser = new models.userModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    department:req.body.department,
    academicYear: req.body.academicYear,
    email: req.body.email,
    username:req.body.username,
    password: req.body.password
})
  newUser.save()
  console.log(newUser)
  res.redirect("http://localhost:3000/home")
})

app.get("/getData",(req,res)=>{
  res.send(JSON.stringify({name:"Manav"}))
})

app.listen(PORT, () => {
  console.log(`E-Campus API is running on PORT No- ${PORT}`);
});