window.onload = () => {
  // Check if user is logged in
  const user = localStorage.getItem("username");
  if (!user) {
    window.location.href = "index.html"; 
    return;
  }

  // Set username
  document.getElementById("user").textContent = user;
  const userNameElem = document.getElementById("user-name");
  if(userNameElem) userNameElem.textContent = user;

  // Apply saved theme
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
  }

  // Logout button
  const logoutBtn = document.getElementById("logout");
  if(logoutBtn){
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "index.html";
    });
  }

  //theme toggle button on dashboard
  const themeToggleBtn = document.getElementById("theme-toggle");
  if(themeToggleBtn){
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }
};
