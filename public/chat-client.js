window.addEventListener("viewChange", (e) => {
  if (e.detail.path !== "/ai-chat") return;

  const chatBox = document.getElementById("chat-box");
  const input = document.getElementById("userInput");
  const button = document.getElementById("sendBtn");

  button.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    addMessage("Thinking...", "bot");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    // remove "Thinking..."
    chatBox.lastChild.remove();

    addMessage(data.reply, "bot");
  }

  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = sender === "user" ? "user-msg" : "bot-msg";
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
