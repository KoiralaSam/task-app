require("../src/db/mongoose");
const Tasks = require("../src/models/task");

Tasks.findByIdAndDelete("67a7dd3bcd287b84b4f96838")
  .then((task) => {
    console.log(task);
    return Tasks.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteTaskAndCount = async () => {
  const task = await Tasks.findByIdAndDelete("67a80085a1d55f3c128d273c");
  const count = await Tasks.countDocuments({ completed: "false" });
  return count;
};

deleteTaskAndCount();
