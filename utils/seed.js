const db = require("../db/db"); // Assuming this is the path to your db.js file
const User = require("../models/user"); // Assuming this is the path to your User model

async function seedUsers() {
  try {
    await db.connect();

    const usersToSeed = [
      {
        name: "User 1",
        email: "user1@example.com",
        password: "password1",
        isActivated: true,
      },
      {
        name: "User 2",
        email: "user2@example.com",
        password: "password2",
        isActivated: false,
      },
      // Add more users as needed
    ];

    const dbClient = db.getConnection();
    await dbClient.collection("users").insertMany(usersToSeed);

    console.log("Seeding completed!");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    db.disconnect(); // Close the database connection after seeding is complete
  }
}

seedUsers();
