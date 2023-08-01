require("dotenv").config();
const bodyParser = require("body-parser"); // Import body-parser
const express = require("express");
const db = require("./db/db");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const port = process.env.PORT || 3001; // Use the PORT value from the .env file or fallback to 3000

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
db.connectDB();
app.use((req, res, next) => {
  console.log("Time:", Date.now(), "Request Sent");
  next();
});

app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
