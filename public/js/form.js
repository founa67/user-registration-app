document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const email     = document.getElementById('email').value.trim();
  const message   = document.getElementById('message');

  message.textContent = '';
  message.className = 'message';

  if (!firstName || !lastName || !email) {
    message.textContent = 'Please fill in all fields.';
    message.classList.add('error');
    return;
  }

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    const data = await res.json();

    if (!res.ok) {
      message.textContent = data.error || 'Something went wrong.';
      message.classList.add('error');
      return;
    }

    message.textContent = `Welcome, ${data.user.first_name}!`;
    message.classList.add('success');
    e.target.reset();
  } catch (err) {
    message.textContent = 'Network error. Try again.';
    message.classList.add('error');
  }
});