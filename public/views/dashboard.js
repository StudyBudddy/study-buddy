export function dashboardInit() {}
export default function dashboard() {
  return `
  <style>
  .dash-full {
    display: grid;
    place-items: center;
    height: 100%;
    padding: 50px;
  } 
  #welcome {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%);
    display: flex; 
    justify-content: space-between;
    align-items: center;
    border-radius: 25px; 
    width: 100%;
    padding: 20px 50px; 
    color: var(--primary-color);
  }
  #welcome img {
    width: 200px;
    align-self: flex-end;
  } 
  .feature-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin:  auto;
  }
  .feature-item {
    background: var(--bg-color);
    border-radius: 25px;
    padding: 20px;
  }
  .feature-item:first-child {
    grid-column: span 2;
  }
  .feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    background-color: var(--secondary-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
  }
  .feature-row {
    display: flex;
    gap: 20px;
  }
  h2 {
    color: var(--heading-color);
    font-size: 20px;
    font-weight: 600;
  }
  .feature-icon svg {
    width: 40px;
    height: 40px;
  }
  .btn-row {
    margin-top: 15px;
  }
  .btn-feature {
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    font-size: 15px;
    border-radius: 12px;
    font-weight: 600;
    border: solid 2px var(--primary-color);
    text-decoration: none;
  }
  </style>
  <div class="dash-full">
     <div id="welcome">
      <div>
        <h1>👋 Hey there, Welcome back!</h1>
        <p>How can we help boost your learning productivity today?</p>
      </div>
      <img src="../images/welcome.svg"> 
    </div>
    <div class="feature-container">
      <div class="feature-item"></div>
      <div class="feature-item">
        <div class="feature-row">
          <div class="feature-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m14.05 15.55l-.7-.7q-.3-.3-.712-.312t-.713.287t-.3.713t.3.712l1.425 1.425q.3.3.7.3t.7-.3l3.575-3.575q.3-.3.288-.7t-.313-.7q-.3-.275-.7-.287t-.7.287zM8 15h1q.425 0 .713-.288T10 14t-.288-.712T9 13H8q-.425 0-.712.288T7 14t.288.713T8 15m0-3h5q.425 0 .713-.288T14 11t-.288-.712T13 10H8q-.425 0-.712.288T7 11t.288.713T8 12m0-3h5q.425 0 .713-.288T14 8t-.288-.712T13 7H8q-.425 0-.712.288T7 8t.288.713T8 9m4 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                />
              </svg>
          </div>
          <div>
            <h2>Manage your tasks</h2>
            <p>Organize your study tasks</p>
          </div>
        </div>
        <div class="btn-row">
          <a href="/todo-list" class="btn-feature" data-link>View Todo List</a>
        </div>
      </div>
      <div class="feature-item">
      <div class="feature-row">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M3.395 13.208c.253.35.61.613 1.019.75l2.4.782a3.85 3.85 0 0 1 1.825 1.294c.266.344.472.73.608 1.144l.792 2.43A2.07 2.07 0 0 0 11.999 21a2.06 2.06 0 0 0 1.205-.383c.353-.26.62-.62.767-1.033l.781-2.402a3.8 3.8 0 0 1 2.425-2.43l2.444-.794a2.076 2.076 0 0 0 .999-3.152l-2.406-.779a3.83 3.83 0 0 1-2.43-2.426l-.794-2.44a2.07 2.07 0 0 0-3.17-.97L9.184 6.86a3.85 3.85 0 0 1-2.36 2.381l-2.44.79a2.077 2.077 0 0 0-.99 3.178"
              />
            </svg>
          </div>
          <div>
            <h2>AI Study Assistant</h2>
            <p>Ask questions, get explanations</p>
          </div>
        </div>
        <div class="btn-row">
          <a href="/ai-chat" class="btn-feature" data-link>Start Chatting</a>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-row">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 3h4v2h-4zm2 11a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1m0 8a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"
              />
            </svg>
          </div>
          <div>
            <h2>Study Timer</h2>
            <p>Stay focused with everytime</p>
          </div>
        </div>
        <div class="btn-row">
          <a href="/timer" class="btn-feature" data-link>Start Timer</a>
        </div>
      </div>
    <div class="feature-item">
      <div class="feature-row">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
            <g fill="none" stroke="currentColor" stroke-width="4">
              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M26 14v14" />
              <path
                fill="currentColor"
                d="M14 28.666C14 26.64 15.934 25 18.32 25H26v4.334C26 31.36 24.066 33 21.68 33h-3.36C15.934 33 14 31.359 14 29.334z"
              />
              <path stroke-linecap="round" stroke-linejoin="round" d="m32 15l-6-1" />
            </g>
          </svg>
        </div>
        <div>
          <h2>Lofi Music</h2>
          <p>Relaxing beats to help you focus</p>
        </div>
      </div>
      <div class="btn-row">
        <a href="/lofi-music" class="btn-feature" data-link>Play Music</a>
      </div>
    </div>
    </div>
  </div>
  `;
}
