const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "task-manager";

const connect = async () => {
  await client.connect();
  console.log("connected secussfully to server");

  const db = client.db(databaseName);
  try {
    const updateResult = await db.collection("users").updateMany(
      {
        age: 27,
      },
      {
        $set: {
          name: "Sam Koirala",
        },
      }
    );
    console.log(updateResult);
  } catch (error) {
    console.log(error);
  }
};

connect();
