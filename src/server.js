const express = require("express");
const cors = require("cors");

const expenseRoutes = require("./src/routes/expenseRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", expenseRoutes);

app.listen(5000, () => {
  console.log(" FinTrack AI running on http://localhost:5000");
});
