const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

let expenses = [];
let editIndex = null;

window.onload = async function () {
  try {
    const res = await fetch('/expenses');
    if (!res.ok) throw new Error('Failed to fetch expenses');

    expenses = await res.json();
    console.log('Loaded expenses:', expenses);
    renderExpenses();
  } catch (err) {
    console.error('🚨 Error loading expenses:', err.message);
    alert('Could not load expenses. Make sure the backend is running.');
  }
};

expenseForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('expenseName').value;
  const amount = document.getElementById('expenseAmount').value;
  const category = document.getElementById('expenseCategory').value;

  if (!name || !amount || !category) {
    alert('Please fill in all fields');
    return;
  }

  try {
    if (editIndex === null) {
      // Add new expense
      const res = await fetch('/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: name, amount, category })
      });

      if (!res.ok) throw new Error('Failed to add expense');

      const newExpense = await res.json();
      expenses.push(newExpense);
      console.log('✅ Expense added:', newExpense);
    } else {
      // Update existing expense
      const expense = expenses[editIndex];
      const res = await fetch(`/expenses/${expense.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: name, amount, category })
      });

      if (!res.ok) throw new Error('Failed to update expense');

      expenses[editIndex] = { ...expense, description: name, amount, category };
      editIndex = null;
      console.log('✅ Expense updated:', expenses[editIndex]);
    }

    expenseForm.reset();
    renderExpenses();
  } catch (err) {
    console.error('🚨 Error submitting expense:', err.message);
    alert('Something went wrong while submitting the expense.');
  }
});

function renderExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach((exp, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${exp.description}</td>
      <td>₹${exp.amount}</td>
      <td>${exp.category}</td>
      <td>
        <button class="btn btn-warning btn-sm me-2" onclick="editExpense(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
      </td>
    `;
    expenseList.appendChild(row);
  });
}

function editExpense(index) {
  const exp = expenses[index];
  document.getElementById('expenseName').value = exp.description;
  document.getElementById('expenseAmount').value = exp.amount;
  document.getElementById('expenseCategory').value = exp.category;
  editIndex = index;
}

async function deleteExpense(index) {
  const exp = expenses[index];
  try {
    const res = await fetch(`/expenses/${exp.id}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error('Failed to delete expense');

    expenses.splice(index, 1);
    renderExpenses();
    console.log('🗑️ Expense deleted:', exp.id);
  } catch (err) {
    console.error('🚨 Error deleting expense:', err.message);
    alert('Failed to delete expense. Please try again.');
  }
}
