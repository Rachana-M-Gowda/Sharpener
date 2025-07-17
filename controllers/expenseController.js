const db = require('../models');
const Expense = db.Expense;

exports.createExpense = async (req, res) => {
  const expense = await Expense.create(req.body);
  res.status(201).json(expense);
};

exports.getAllExpenses = async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
};

exports.deleteExpense = async (req, res) => {
  await Expense.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Expense deleted' });
};

// [Bonus] Update
exports.updateExpense = async (req, res) => {
  const updated = await Expense.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: 'Expense updated', updated });
};
