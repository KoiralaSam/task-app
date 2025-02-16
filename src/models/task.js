const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// taskSchema.pre("save", async function (next) {
//   const task = this;
//   if(task.isModified))
// });

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
