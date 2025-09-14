// Toggle Dark Mode
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Password Show/Hide
const togglePasswordBtn = document.getElementById("togglePassword");
togglePasswordBtn.addEventListener("click", () => {
  const pwd = document.getElementById("password");
  if (pwd.type === "password") {
    pwd.type = "text";
    togglePasswordBtn.textContent = "Hide";
  } else {
    pwd.type = "password";
    togglePasswordBtn.textContent = "Show";
  }
});

// Pre-fill name if remembered
window.onload = () => {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("name").value = savedName;
    document.getElementById("remember").checked = true;
  }

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

// Form validation & fake login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  ["name-error", "email-error", "password-error"].forEach((id) => {
    document.getElementById(id).textContent = "";
  });

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  let valid = true;

  if (!name) {
    document.getElementById("name-error").textContent = "Name is required.";
    valid = false;
  }

  if (!email) {
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

  if (remember) {
    localStorage.setItem("name", name);
  } else {
    localStorage.removeItem("name");
  }

  // Fake login check
  if (email === "demo@test.com" && password === "123456") {
    localStorage.setItem("username", name);
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect email or password.\nTry demo@test.com / 123456");
  }
});
