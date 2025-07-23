document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  const msg = document.getElementById('message');

  if (res.ok) {
    msg.textContent = data.message; // e.g., 'User registered successfully'
    msg.style.color = 'green';

    // Optional: Clear form
    document.getElementById('signupForm').reset();
  } else {
    msg.textContent = data.error || 'Signup failed!';
    msg.style.color = 'red';
  }
});
