const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:String,
  exercises: [Object]
});

const User = mongoose.model("User", userSchema);

module.exports = User;