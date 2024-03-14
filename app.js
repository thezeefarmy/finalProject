document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(email, password);
    console.log('User logged in successfully');
    // Redirect to another page or perform further actions upon successful login
  } catch (error) {
    console.error('Error signing in:', error.message);
    // Display error message to the user
  }
});
