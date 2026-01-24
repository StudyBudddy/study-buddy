export function chatInit() {}

export default function chat() {
  return ` 
  <div>
    <h1><img src=/images/AI.png width="40" height="40"> AI Chatbot<h1>
  </div>
   <div class="chat-container">
      <div id="chat-box" class="chat-box">
        <div class="bot-msg">👋 Hi! I'm your StudyBuddy AI🎓✨. Ask me anything..</div>
      </div>

      <div class="chat-input">
        <input type="text" id="userInput" placeholder="Type your message..." />
        <button id="sendBtn">Send</button>
      </div>
    </div>`
}



