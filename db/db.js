const { MongoClient } = require("mongodb");

const connectionUrl =
  "mongodb+srv://admin:chXqpd53GkY3x6wN@cluster.zg3p6re.mongodb.net/?retryWrites=true&w=majority";

let db;

async function connectDB() {
  try {
    const client = await MongoClient.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = {
  connectDB,
  getDB: () => db, // This function returns the connected db instance
};
