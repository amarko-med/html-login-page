window.onload = () => {
  const user = localStorage.getItem("username");
  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("user").textContent = user;
  }
};

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "index.html";
});
