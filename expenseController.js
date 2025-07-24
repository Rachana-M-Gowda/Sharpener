const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  const { amount, description, category, userId } = req.body;
  const expense = await Expense.create({ amount, description, category, UserId: userId });
  res.status(201).json(expense);
};

exports.getExpenses = async (req, res) => {
  const userId = req.query.userId;
  const expenses = await Expense.findAll({ where: { UserId: userId } });
  res.json(expenses);
};

exports.deleteExpense = async (req, res) => {
  const id = req.params.id;
  await Expense.destroy({ where: { id } });
  res.json({ message: 'Expense deleted' });
};
