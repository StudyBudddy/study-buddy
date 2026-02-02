export function chatInit() {}

export default function chat() {
  return ` 
  <style>
      .chat-container {
      display: flex;
      flex-direction: column;
      height: 90%;
      
    }

    .chat-box {
      flex: 1;
      padding: 15px;
      overflow-y: auto;
      background: #2b2b2b;
      border-radius: 10px;
      background-image: url('/images/Screenshot 2026-01-29 004833.png');
      background-repeat: no-repeat;
       background-attachment: fixed;
      background-size: 100% 100%;
      color:var(--text-color);
      display:flex;
      flex-direction:column;

    }

    .user-msg {
      background: #b6ff4d;
      color: #000;
      padding: 8px 12px;
      border-radius: 12px;
      margin: 8px 0;
      align-self: flex-end; 
      text-align: right;
      max-width: 70%;
    }

    .bot-msg {
      background: #444;
      color: #ffffff;
      padding: 8px 12px;
      border-radius: 12px;
      margin: 8px 0;
      align-self: flex-start;
      max-width: 70%;
    }

    .chat-input {
      display: flex ;
      justify-content: center;
      gap: 10px;
      margin-top: 10px;
      width:100%;
      
      
    }

    .chat-input input {
      flex: none;
      padding: 12px;
      gap :50px;
      border-radius: 8px;
      border: 1px solid #ccc;
      width:50%;
      
    }

    .chat-input button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background: #b6ff4d;
      cursor: pointer;
    }

    .head{
      color:var(--text-color); 
      font-family:'poppins';
      font-size: 35px;
      padding:10px;
    }

  </style>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins' >
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div>
    <h1 class="head"><img src=/images/AI.png width="40" height="40"> AI Chatbot<h1>
  </div>
   <div class="chat-container">
      <div id="chat-box" class="chat-box">
        <div class ="bot-msg">👋 Hi! I'm your StudyBuddy AI🎓✨. <br>Ask me anything..</div>
      </div>

      <div class="chat-input">
       <input type="text" id="userInput" placeholder="Type your message..." />
        <button id="sendBtn"><i class="fa fa-send"></i></button>
      </div>
    </div>`
}



