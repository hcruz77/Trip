async function signupFormHandler(event) {
  event.preventDefault();

  
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        console.log(response);
        alert('could not sign up')
      }
    }
}
  
document.
querySelector('#submit-button')
.addEventListener('click', signupFormHandler);
