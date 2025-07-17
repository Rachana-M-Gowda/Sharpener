const express = require('express');
const router = express.Router();
const {
  createExpense,
  getAllExpenses,
  deleteExpense,
  updateExpense
} = require('../controllers/expenseController');

router.post('/', createExpense);
router.get('/', getAllExpenses);
router.delete('/:id', deleteExpense);
router.put('/:id', updateExpense); // [Bonus] Update route

module.exports = router;
