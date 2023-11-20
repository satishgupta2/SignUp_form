function validateForm() {
    // Get form inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (username === '' || email === '' || password === '') {
      alert('All fields must be filled out');
      return;
    }
  
    // Additional validation (e.g., email format)
    if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
    }
  
    // If all validations pass, you can submit the form or perform other actions
    alert('Sign up successful!');
  }
  
  function isValidEmail(email) {
    // Simple email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  