const logoutBtn = document.querySelector('#logout');

const handleLogout = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to logout');
  }
};

logoutBtn.addEventListener('click', handleLogout);
