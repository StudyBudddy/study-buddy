const toggle = document.getElementById("themeToggle");
const root = document.documentElement;
const logo = document.getElementById("logo");

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
