const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  var button = document.getElementById('myButton');
  button.onclick = function () {
    location.assign ('signup')
  }
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signinHandler = () => {
  window.location.replace('/signup')
}
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document
.querySelector('#sign-up')
.addEventListener('click', signinHandler);
