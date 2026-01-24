export function timerInit() {
  const style = document.createElement("style");
  style.textContent = `
.timer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;   /* two columns */
  gap: 3rem;
  justify-content: center;
  align-items: start;
  padding: 2rem 4rem;
  background-color: var(--bg-color);
}

.timer-set {
  display: flex;
  flex-direction: column;
  align-items: center;     /* centerd timer content */
  justify-content: center;
  gap: 1rem;
}

h1,h3 {
  color: var(--heading-color);
}
  
.set-icon {
  position: fixed;
  left: 20px;
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.timer {
  font: var(--font--text);
  font-size: 3.5rem;
  margin: 0.5rem 0;
  color: var(--text-color);
}

.controls button, .settings button {
  transition: background-color 0.25s ease, transform 0.2s ease;
  font: var(--font--text);
  margin: 0.2rem 0.4rem ;
  padding: 0.4rem 1rem;
  cursor: pointer;
  border: 2px solid #f53d37;
  border-radius: 8px;
  background-color: #eeafde;
  cursor: pointer;
  font-weight: bold;
  }
  
  button:hover {
    background-color: #8fddf0;
  }

  button.active {
    background-color: var(--primary-color);
  }

.settings input { 
  width: 70px;
  height: 30px;
  margin-right: 0.4rem;
  font: var(--font--text);
  border: 2px solid #da5543;
  border-radius: 8px;
  background-color: #fcb7b7;
  text-align: center;
  font-weight: bold;
  }

  input:hover {
    background-color: #aff594;
  }

/* ===== Tomato ===== */

.tomato-svg {
  width: 140px;
  height: 140px;
  margin: 0.2rem auto;
  display: block;
  opacity: 0.6;
  transform-origin: center;
}

.tomato-svg.visible {
  opacity: 1;
}

/* Body Pulsing */
.tomato-svg.active {
  animation: tomatoPulse 1.6s ease-in-out infinite;
}

/* Leaf Sway */
.tomato-svg.active #leaf {
  transform-origin: 100px 55px;
  animation: leafSway 1.4s ease-in-out infinite;
}

@keyframes tomatoPulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes leafSway {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(6deg); }
  50%  { transform: rotate(0deg); }
  75%  { transform: rotate(-6deg); }
  100% { transform: rotate(0deg); }
}

/* ===== Clock ===== */

.clock {
  width: 120px;
  height: 120px;
  border: 6px solid #2196f3;
  border-radius: 50%;
  margin: 0.5rem auto;
  position: relative;
  opacity: 0.6;
  transform-origin: center;
}

.clock.visible {
  opacity: 1;
}

/* Pulsing clock body */
.clock.active {
  animation: clockPulse 1.5s ease-in-out infinite;
}

/* Clock hands */
.clock::before,
.clock::after {
  content: "";
  position: absolute;
  background: #2196f3;
  top: 50%;
  left: 50%;
  transform-origin: bottom center;
}

.clock::before {
  width: 4px;
  height: 35px;
  transform: translate(-50%, -100%);
}

.clock::after {
  width: 2px;
  height: 45px;
  transform: translate(-50%, -100%);
}

.clock.active::before {
  animation: hourHand 20s linear infinite;
}
.clock.active::after {
  animation: minuteHand 6s linear infinite;
}

@keyframes clockPulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes hourHand {
  from { transform: translate(-50%, -100%) rotate(0deg); }
  to   { transform: translate(-50%, -100%) rotate(360deg); }
}

@keyframes minuteHand {
  from { transform: translate(-50%, -100%) rotate(0deg); }
  to   { transform: translate(-50%, -100%) rotate(360deg); }
}

@media (max-width: 900px) {
  .timer-container {
    grid-template-columns: 1fr;
  }
}

`;
  document.head.appendChild(style);

  /* ---------------- Defining Variables---------------- */
  let workMinutes = 25;
  let shortBreakMinutes = 5;
  let longBreakMinutes = 15;

  let workSeconds = workMinutes * 60;
  let breakSeconds = longBreakMinutes * 60;

  let workInterval = null;
  let breakInterval = null;
  const workTimer = document.getElementById("workTimer");
  const breakTimer = document.getElementById("breakTimer");
  const workAnim = document.getElementById("workAnim");
  const breakAnim = document.getElementById("breakAnim");

  update(workTimer, workSeconds);
  update(breakTimer, breakSeconds);

  /* ---- Buttons (Set Time Only) ---- */

  document.getElementById("applyWork").onclick = () => {
    workMinutes = +document.getElementById("workInput").value;
    workSeconds = workMinutes * 60;
    update(workTimer, workSeconds);
    workAnim.classList.add("visible");
  };

  document.getElementById("applyShort").onclick = () => {
    shortBreakMinutes = +document.getElementById("shortInput").value;
    breakSeconds = shortBreakMinutes * 60;
    update(breakTimer, breakSeconds);
    breakAnim.classList.add("visible");
  };

  document.getElementById("applyLong").onclick = () => {
    longBreakMinutes = +document.getElementById("longInput").value;
    breakSeconds = longBreakMinutes * 60;
    update(breakTimer, breakSeconds);
    breakAnim.classList.add("visible");
  };

  document.querySelectorAll(".controls").forEach((controlGroup) => {
    const buttons = controlGroup.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // remove active from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // add active to the clicked button
        button.classList.add("active");
      });
    });
  });

  /* ---- Work Timer ---- */
  document.getElementById("workStart").onclick = () => {
    if (workInterval) return;
    workAnim.classList.add("visible", "active");
    workInterval = setInterval(() => {
      workSeconds--;
      update(workTimer, workSeconds);
      if (workSeconds <= 0) stopWork();
    }, 1000);
  };

  document.getElementById("workPause").onclick = () => {
    clearInterval(workInterval);
    workInterval = null;
    workAnim.classList.remove("active"); // stops pulse & leaf, keeps opacity
  };

  document.getElementById("workReset").onclick = () => {
    clearInterval(workInterval);
    workInterval = null;
    workSeconds = workMinutes * 60;
    update(workTimer, workSeconds);
    workAnim.classList.remove("active", "visible");
  };

  /* ---- Break Timer ---- */

  document.getElementById("breakStart").onclick = () => {
    if (breakInterval) return;
    breakAnim.classList.add("visible", "active");
    breakInterval = setInterval(() => {
      breakSeconds--;
      update(breakTimer, breakSeconds);
      if (breakSeconds <= 0) stopBreak();
    }, 1000);
  };

  document.getElementById("breakPause").onclick = () => {
    clearInterval(breakInterval);
    breakInterval = null;
    breakAnim.classList.remove("active"); // stops pulse & rotation, keeps opacity
  };

  document.getElementById("breakReset").onclick = () => {
    clearInterval(breakInterval);
    breakInterval = null;
    breakSeconds = longBreakMinutes * 60;
    update(breakTimer, breakSeconds);
    breakAnim.classList.remove("active", "visible");
  };

  /* ---- Timer End ---- */

  function stopWork() {
    clearInterval(workInterval);
    workInterval = null;
    workAnim.classList.remove("active", "visible");
    notify("Now it's the time to take a break!");
  }

  function stopBreak() {
    clearInterval(breakInterval);
    breakInterval = null;
    breakAnim.classList.remove("active", "visible");
    notify("Now it's the time to work!");
  }
}

/* ---------------- Notifications ---------------- */

function update(el, seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function notify(msg) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(msg);
  } else {
    alert(msg);
  }
}

export default function timer() {
  return ` <section class="timer-container">

  <div class="timer-set" id="pomodoroSet">
  <h1>Pomodoro Timer</h1>
  <svg id="workAnim" class="tomato-svg" viewBox="0 0 200 200">
    <circle cx="100" cy="110" r="60" fill="#e53935" />
    <ellipse cx="75" cy="90" rx="15" ry="25" fill="rgba(255,255,255,0.2)" />
    <path id="leaf"
          d="M100 30 C70 20, 60 50, 90 55 C100 40, 110 40, 110 55 C140 50, 130 20, 100 30"
          fill="#2e7d32"/>
  </svg>
  <div class="timer" id="workTimer">25:00</div>

  <div class="controls">
    <button id="workStart">Start</button>
    <button id="workPause">Pause</button>
    <button id="workReset">Reset</button>
  </div>

  <h3>Work Time Settings</h3>
  <div class="settings">
    <input type="number" id="workInput" value="25" min="1">
    <button id="applyWork">Apply Work Time</button>
  </div>
  
  
</div>
<div class="timer-set" id="breakSet">
  <h1>Break Timer</h1>
  <div class="clock" id="breakAnim"></div>
  <div class="timer" id="breakTimer">15:00</div>

  <div class="controls">
    <button id="breakStart">Start</button>
    <button id="breakPause">Pause</button>
    <button id="breakReset">Reset</button>
  </div>

  <h3>Break Time Settings</h3>
  <div class="settings">
    <input type="number" id="shortInput" value="5" min="1">
    <button id="applyShort">Apply Short Break</button>
  </div>

  <div class="settings">
    <input type="number" id="longInput" value="15" min="1">
    <button id="applyLong">Apply Long Break</button>
  </div>
</div>
</section>`;
}