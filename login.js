// Validates the login form before submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    event.preventDefault();
    alert("Email and password are required.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    event.preventDefault();
    alert("Password must contain at least 6 characters.");
  }
});
