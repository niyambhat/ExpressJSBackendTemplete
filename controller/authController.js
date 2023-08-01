const express = require("express");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = {
      email: email,
      password: password,
    };
    res.send(user);
  } catch (error) {
    console.error("Error in login:");
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { login };
