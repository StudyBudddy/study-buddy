import dashboard from "./views/dashboard.js";
import chat from "./views/chat.js";
import todo from "./views/todo.js";
import music from "./views/music.js";
import timer from "./views/timer.js";

const routes = {
  "/": { title: "Dashboard", view: dashboard },
  "/todo": { title: "Todo List", view: todo },
  "/ai-chat": { title: "AI Chat", view: chat },
  "/lofi-music": { title: "Lofi Music", view: music },
  "/timer": { title: "Study Timer", view: timer },
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];

  document.getElementById("view").innerHTML = route.view();
  document.title = route.title;

  window.dispatchEvent(new CustomEvent("viewChange", { detail: { path } }));
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
