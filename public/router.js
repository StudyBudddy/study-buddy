import dashboard, { dashboardInit } from "./views/dashboard.js";
import todo, { todoInit } from "./views/todo.js";
import chat, { chatInit } from "./views/chat.js";
import timer, { timerInit } from "./views/timer.js";
import login, { loginInit } from "./views/login.js";
import signup, { signupInit } from "./views/signup.js";
import music, { musicInit } from "./views/music.js";

const routes = {
  "/": { title: "Dashboard", render: dashboard, init: dashboardInit },
  "/todo": { title: "Todo List", render: todo, init: todoInit },
  "/ai-chat": { title: "AI Chat", render: chat, init: chatInit },
  "/timer": { title: "Study Timer", render: timer, init: timerInit },
  "/login": { title: "Login", render: login, init: loginInit },
  "/signup": { title: "Signup", render: signup, init: signupInit },
  "/lofi-music": { title: "Music Player", render: music, init: musicInit },
};

const router = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];

  document.getElementById("view").innerHTML = route.render();
  document.title = route.title;

  document.querySelectorAll("nav a[data-link]").forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });

  if (route.init) {
    route.init();
  }

  window.dispatchEvent(new CustomEvent("viewChange", { detail: { path } }));
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (link) {
      e.preventDefault();
      navigateTo(link.href);
    }
  });

  router();
});
