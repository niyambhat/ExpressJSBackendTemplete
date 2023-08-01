const User = require("../models/user");

// Create a new user
async function createUser(req, res) {
  try {
    const { name, email, password, isActivated } = req.body;
    const newUser = new User({ name, email, password, isActivated });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get a single user by ID
async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update a user by ID
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, password, isActivated } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password, isActivated },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(deletedUser);
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
