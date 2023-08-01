const User = require("../models/user");

// // Method to create an admin user if it doesn't exist
// async function createAdminUser(req, res) {
//   try {
//     const user = await User.findOne();
//     if (!user) {
//       const newUser = new User({
//         name: "Admin",
//         email: "admin@local.com",
//         password: "password",
//         isActivated: false,
//       });
//       await newUser.save();
//       console.log("Admin user created");
//     }
//     res.json({ message: "Admin user already exists or created successfully." });
//   } catch (err) {
//     console.error("Error creating admin user:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

// // Method to get all users
const getAllUsers = async (req, res) => {
  res.send("All users");
  // try {
  //   const users = await User.find();
  //   res.json(users);
  // } catch (err) {
  //   console.error("Error fetching all users:", err);
  //   res.status(500).json({ error: "Internal server error" });
  // }
};

module.exports = {
  // createAdminUser,
  getAllUsers,
};
