// Toggle Dark Mode
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Password Show/Hide
document.getElementById("togglePassword").addEventListener("click", () => {
  const pwd = document.getElementById("password");
  const btn = document.getElementById("togglePassword");
  if (pwd.type === "password") {
    pwd.type = "text";
    btn.textContent = "Hide";
  } else {
    pwd.type = "password";
    btn.textContent = "Show";
  }
});

// Pre-fill name if remembered
window.onload = () => {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("name").value = savedName;
    document.getElementById("remember").checked = true;
  }
};

// Form validation & fake login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous errors
  ["name-error", "email-error", "password-error"].forEach((id) => {
    document.getElementById(id).textContent = "";
  });

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  let valid = true;

  if (name === "") {
    document.getElementById("name-error").textContent = "Name is required.";
    valid = false;
  }

  if (email === "") {
    document.getElementById("email-error").textContent = "Email is required.";
    valid = false;
  } else if (!email.includes("@")) {
    document.getElementById("email-error").textContent = "Email must be valid.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (!valid) return;

  // Remember me functionality
  if (remember) {
    localStorage.setItem("name", name);
  } else {
    localStorage.removeItem("name");
  }

  // Fake login check
  if (email === "demo@test.com" && password === "123456") {
    // Save username and redirect to dashboard
    localStorage.setItem("username", name);
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect email or password.\nTry demo@test.com / 123456");
  }
});
