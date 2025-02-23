const express = require("express");

require("./db/mongoose");

const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");
const main = async () => {
  // const task = await Task.findById("67b536a2a0c1f03e0b59488f");
  // await task.populate("owner");
  // console.log(task.owner);
  const user = await User.findById("67b535edd9c6d3677683f573");
  await user.populate("tasks");
  console.log(user.tasks);
};
//main();
