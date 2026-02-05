const toggle = document.getElementById("themeToggle");
const root = document.documentElement;
const logo = document.getElementById("logo");

const userProfile = document.getElementById("user-profile");
const loginBtn = document.getElementById("login-btn");
const userNameTxt = document.getElementById("user-name");
const userEmailTxt = document.getElementById("user-email");

function updateAuthUI() {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  if (token && userString) {
    const user = JSON.parse(userString);

    userNameTxt.textContent = user.username;
    userEmailTxt.textContent = user.email;

    loginBtn.classList.add("hidden");
    userProfile.classList.remove("hidden");
  } else {
    loginBtn.classList.remove("hidden");
    userProfile.classList.add("hidden");
  }
}

userProfile.addEventListener("click", () => {
  const confirmLogout = confirm("Do you want to log out?");
  if (confirmLogout) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
});

updateAuthUI();

function updateLogo(theme) {
  logo.src =
    theme === "light" ? "./images/logo-light.png" : "./images/logo.png";
}

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);
updateLogo(savedTheme);

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateLogo(next);
});
