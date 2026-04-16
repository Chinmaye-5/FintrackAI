const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

let users = [];

const register = async (email, password) => {
  const hashed = await bcrypt.hash(password, 10);

  const user = { id: users.length + 1, email, password: hashed };
  users.push(user);

  return user;
};

const login = async (email, password) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id }, config.JWT_SECRET);
  return token;
};

module.exports = { register, login };
