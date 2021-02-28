const TaskSchema = require("../schemas/task");
const mongoose = require("mongoose");

module.exports.saveTask = async function saveTask(id, task) {
  const obj = new TaskSchema({
    name: task.name,
    description: task.description,
    user_info: id,
  });
  return obj.save();
};
module.exports.getAll = async function getAllTask(id) {
  const result = TaskSchema.find({ user_info: id }).sort({ createdAt: 1 });
  return result;
};
module.exports.makecompleted = async function updateCompletedFlag(id) {
  const query = { _id: id };
  const result = TaskSchema.findOneAndUpdate(
    query,
    {
      completed: true,
      completedAt: new Date(),
    },
    { new: true, useFindAndModify: false }
  );
  console.log(result);
  return result;
};

module.exports.makecompleted = async function updateCompletedFlag(id) {
  const query = { _id: id };
  const result = TaskSchema.findOneAndUpdate(
    query,
    {
      completed: true,
      completedAt: new Date(),
    },
    { new: true, useFindAndModify: false }
  );
  console.log(result);
  return result;
};

module.exports.markedTaskDeleted = async function markedTaskDeleted(id) {
  const query = { $and: [{ _id: id }, { completed: false }] };
  const result = TaskSchema.findOneAndUpdate(
    query,
    {
      deleted: true,
    },
    { new: true, useFindAndModify: false }
  );
  console.log(result);
  return result;
};

module.exports.deleteTask = async function deleteTask(id) {
  const query = {
    $and: [{ _id: id }, { completed: false }, { deleted: true }],
  };
  const result = TaskSchema.deleteOne(query);
  //console.log(result);
  return result;
};

module.exports.taskHistory = async function filterTaskViaDateTime(
  userId,
  startDate,
  endDate
) {
  const query = {
    $and: [
      { user_info: userId },
      { createdAt: { $gte: startDate } },
      { completedAt: { $lte: endDate } },
      { completed: true },
    ],
  };
  const result = TaskSchema.find(query);
  console.log(result);
  return result;
};
