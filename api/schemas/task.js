const mongoose = require("mongoose");

const TaskSchema = mongoose.model(
  "task",
  new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date, default: null },
    user_info: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  })
);

module.exports = TaskSchema;
