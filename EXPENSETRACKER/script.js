document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();
  const msg = document.getElementById('message');

  if (response.ok) {
    msg.textContent = 'Sign up successful!';
    msg.style.color = 'green';
  } else {
    msg.textContent = data.error || 'Sign up failed!';
    msg.style.color = 'red';
  }
});
