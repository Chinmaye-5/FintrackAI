let expenses = [];

const addExpense = (userId, amount, category) => {
  const expense = {
    id: expenses.length + 1,
    userId,
    amount,
    category,
    createdAt: new Date()
  };

  expenses.push(expense);
  return expense;
};

const getExpenses = (userId) => {
  return expenses.filter(e => e.userId === userId);
};

module.exports = { addExpense, getExpenses };
