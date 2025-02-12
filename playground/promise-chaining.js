require("../src/db/mongoose");

const User = require("../src/models/user");

User.findByIdAndUpdate("67a80150a1d55f3c128d273e", {
  age: 1,
})
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
