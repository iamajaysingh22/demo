const UserSchema = require("../schemas/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

module.exports.saveUser = async function saveUser(user) {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const obj = new UserSchema({
    name: user.name,
    email_id: user.emailId,
    password: user.password,
    isActive: true,
  });
  obj.save();
};

module.exports.userViaEmail = async function getuserViaEmail(user) {
  return UserSchema.findOne({ email_id: user.emailId });
};
