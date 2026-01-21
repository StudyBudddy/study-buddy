import dashboard, { dashboardInit } from "./views/dashboard.js";
import todo, { todoInit } from "./views/todo.js";
import chat, { chatInit } from "./views/chat.js";
import timer, { timerInit } from "./views/timer.js";

const routes = {
  "/": { title: "Dashboard", render: dashboard, init: dashboardInit },
  "/todo": { title: "Todo List", render: todo, init: todoInit },
  "/ai-chat": { title: "AI Chat", render: chat, init: chatInit },
  "/timer": { title: "Study Timer", render: timer, init: timerInit },
};

const router = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];

  document.getElementById("view").innerHTML = route.render();

  document.title = route.title;

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
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
