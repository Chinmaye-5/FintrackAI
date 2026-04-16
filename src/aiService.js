const analyzeSpending = (expenses) => {
  let total = 0;

  expenses.forEach(e => total += e.amount);

  let insight = "Spending is under control";

  if (total > 1000) {
    insight = "High spending detected. Consider reducing expenses.";
  }

  return {
    totalSpent: total,
    insight
  };
};

module.exports = { analyzeSpending };
