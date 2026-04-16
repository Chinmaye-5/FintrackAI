require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "secret123"
};

module.exports = config;
