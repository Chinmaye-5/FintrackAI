const { addExpense, getExpenses } = require("../services/expenseService");
const { analyzeSpending } = require("../services/aiService");

const createExpense = (req, res) => {
  const { amount, category } = req.body;
  const expense = addExpense(req.user.id, amount, category);
  res.json(expense);
};

const fetchExpenses = (req, res) => {
  const data = getExpenses(req.user.id);
  const insights = analyzeSpending(data);

  res.json({ data, insights });
};

module.exports = { createExpense, fetchExpenses };
