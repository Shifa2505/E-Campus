const mongoose = require("mongoose")

// Below are the schemas used
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    department: String,
    academicYear: String,
    email: String,
    username:String,
    password: String
})
const userModel = mongoose.model('Users',userSchema)

const questionSchema = new mongoose.Schema({
    title : String,
    body : String,
    tags : [],
    created_at : {
      type : Date,
      default : Date.now(),
    },
    user : String
    // comment_id: {
    //   type : mongoose.Schema.Types.ObjectId,
    //   ref : "Comments",
    // }
});
const questionModel = mongoose.model("Questions",questionSchema);

const commentSchema = new mongoose.Schema({
  question_id :{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Questions",
  },
  comment : String,
  created_at : {
    type : Date,
    default : Date.now(),
  },
  user : Object,
});
const commentModel = mongoose.model("Comments", commentSchema);

const answerSchema = new mongoose.Schema({
    question_id :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "question",
    },
    answer : String,
    created_at : {
      type : Date,
      default : Date.now(),
    },
    user : Object,
    comment_id: {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Comments",
    },
});
const answerModel = mongoose.model("Answers",answerSchema)

// exporting all the mongoose models
module.exports.userModel = userModel
module.exports.questionModel = questionModel
module.exports.commentModel = commentModel
module.exports.answerModel = answerModel