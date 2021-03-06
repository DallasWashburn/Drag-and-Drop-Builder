const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId:{ type: String, required: true },
  userEmail: { type: String, required: true },
  companyName: {type: String, required:true },
  url: { type: String, required:true },
  projects: { type: [[]] },
  date: { type: Date, default: Date.now },
  designFinalized: {type:Boolean, default:false},
  finalized: {type:Boolean, default:false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;