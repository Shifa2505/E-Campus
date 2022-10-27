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
const { mongo } = require("mongoose");
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
  
  // console.log(req.body)
  console.log(`trying login for "${req.body.username}" with "${req.body.password}"`)
  models.userModel.find({username:req.body.username,password:req.body.password},function (err,docs){
    if (err) {console.log(err);}
    else {
      // console.log(docs[0])
      if(docs[0]!==undefined){
        // res.redirect("http://localhost:3000/home")
        res.send(JSON.stringify({ok:true}))
      }
      else{
        res.send(JSON.stringify({ok:false}))
      }
    }
  })

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
  console.log(`New User registerd as ${newUser.username}`)
  res.redirect("http://localhost:3000/")
})

app.post("/addQuestion",(req,res)=>{
  let newQuestion = new models.questionModel({
    title:req.body.title,
    body:req.body.body,
    tags:req.body.tags,
    user:req.body.user,
    created_at:new Date().toDateString()
  })
  newQuestion.save()
  console.log(newQuestion)
  res.send(JSON.stringify({status:"true"}))
})

app.get("/getData",(req,res)=>{
  res.send(JSON.stringify({name:"Manav"}))
})

app.get("/getQuestions/:sorting",(req,res)=>{
  // console.log(req.params.sorting)
  let sort;
  if(req.params.sorting==="newest"){
    sort={created_at:-1}
  }
  else if(req.params.sorting==="oldest"){
    sort={created_at:1}
  }
  else{
    sort={views:-1}
  }
  models.questionModel.find({}).sort(sort).exec((err,docs)=>{
    if(err){
      console.log(err.message)
    }
    else{
      // console.log(docs)
      res.send(JSON.stringify(docs))
    }
  })
})

app.get("/question/:id",(req,res)=>{
  models.questionModel.find({_id:req.params.id}).exec((err,docs)=>{
    
    // console.log(docs)
    // let views = docs[0]
    // console.log(docs[0])
    res.send(docs)
  })
  models.questionModel.updateOne({_id:req.params.id},{$inc:{views:0.5}},(err,docs)=>{
    console.log(docs)
  })
})

app.post("/upvote",(req,res)=>{
  // console.log(req.body)
  models.questionModel.findById(req.body.question,(err,docs)=>{
    let answers = docs.answers
    let changedAnswer = answers[req.body.answer_index]
    // console.log(answers)
    // console.log(changedAnswer)
    // console.log(changedAnswer["upvotes"]===undefined)
    if(changedAnswer["upvotes"]!==undefined){
      changedAnswer["upvotes"] = changedAnswer["upvotes"] + 1
    }
    else{changedAnswer["upvotes"]=1}
    answers[req.body.index] = changedAnswer
    let question = docs
    models.questionModel.findByIdAndUpdate(req.body.question,question,(err,docs)=>{
      console.log("everything fine.")
      res.send(JSON.stringify({status:"ok"}))
    })
  })
})

app.post("/downvote",(req,res)=>{
  // console.log(req.body)
  models.questionModel.findById(req.body.question,(err,docs)=>{
    let answers = docs.answers
    let changedAnswer = answers[req.body.answer_index]
    // console.log(answers)
    // console.log(changedAnswer)
    // console.log(changedAnswer["upvotes"]===undefined)
    if(changedAnswer["downvotes"]!==undefined){
      changedAnswer["downvotes"] = changedAnswer["downvotes"] + 1
    }
    else{changedAnswer["downvotes"]=1}
    answers[req.body.index] = changedAnswer
    let question = docs
    models.questionModel.findByIdAndUpdate(req.body.question,question,(err,docs)=>{
      console.log("everything fine.")
      res.send(JSON.stringify({status:"ok"}))
    })
  })
})

app.post("/newAnswer",(req,res)=>{
  // console.log(req.body)
  // let answers=[]
  // models.questionModel.find({_id:req.body.question},(err,docs)=>{
  //   answers=docs[0].answer
  //   answers.push(req.body.answer)
  //   console.log(answers)
  //   // models.questionModel.updateOne({_id:req.body.question},{answers:answers})
  //   // .then(()=>{
  //   //   console.log(docs[0])
  //   // })
  // })
  models.questionModel.findOneAndUpdate({_id:req.body.question}, {$push : {answers : {body:req.body.answer,user:req.body.user,time:new Date().toDateString(), upvotes:0, downvotes:0}}}, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    else{
      // console.log(doc)
      return res.send('Succesfully saved.');
    }
});
  // res.send(JSON.stringify({status:"ok"}))

})

app.listen(PORT, () => {
  console.log(`E-Campus API is running on PORT No- ${PORT}`);
});