const mongoose = require("mongoose");

const user = mongoose.model(
  "user",
  new mongoose.Schema({
    name: { type: String, required: true },
    email_id: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean },
  })
);

module.exports = user;
