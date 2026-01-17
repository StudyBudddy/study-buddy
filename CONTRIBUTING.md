# Contributing to Study-Buddy

**Repo:** [https://github.com/StudyBudddy/study-buddy](https://github.com/StudyBudddy/study-buddy)  
**Tech Stack:** React, Vite  

---

## 1. Prerequisites

- **Node.js** (v18+) → [https://nodejs.org](https://nodejs.org)  
- **Git** → [https://git-scm.com](https://git-scm.com)  
- **VS Code** recommended with ESLint + Prettier  
- **Browser**: Chrome or Firefox  

---

## 2. Setup

1. Clone the repo:  

```bash
git clone https://github.com/StudyBudddy/study-buddy.git
cd study-buddy
```

2. Install dependencies:  

```bash
npm install
```

3. Start the dev server:  

```bash
npm run dev
```

- Dev server URL: `http://localhost:5173/`

---

## 3. Folder Structure

```
study-buddy/
│─ public/          # Static files
│─ src/
│   ├─ assets/      # Images, icons
│   ├─ components/  # Reusable components
│   ├─ pages/       # Route pages
│   ├─ hooks/       # Custom hooks
│   ├─ services/    # API calls
│   └─ App.jsx      # Main entry
│─ vite.config.js
│─ package.json
```

---

## 4. Git Workflow

- **Branching**:  
  - `main`: production  
  - `dev`: development integration  
  - Feature branches: `feature/<name>`  

- **Example**:  

```bash
git checkout -b feature/login-form
```

- Pull latest before work:  

```bash
git pull origin dev
```

- Add & commit changes:  

```bash
git add .
git commit -m "feat: add login form"
```

- Push branch:  

```bash
git push origin feature/login-form
```

- Open Pull Requests to `dev`.  

> 💡 Use clear commit messages and small commits.

---

## 5. Best Practices

- **Components**: Small, reusable functional components with hooks (`useState`, `useEffect`)  
- **Styling**: CSS Modules, TailwindCSS, or scoped CSS  
- **State Management**: Local (`useState`) or Context API for shared state  
- **API Calls**: Use `services/api.js` with `async/await` and `try/catch`  
- **Formatting**: Run Prettier & ESLint before committing  

```bash
npx prettier --write .
npx eslint src --fix
```

- **Environment variables**:  
  - Create `.env` for variables (e.g., API URL)  
  - Access in React:  

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

- **Do not commit sensitive info** (use `.gitignore`)  

---

## 6. Pull Request Checklist

- Code builds locally  
- All new components tested  
- Linting & formatting passed  
- Commit message clear  
- PR description explains changes  

---

## 7. Quick Git Commands

```bash
git status
git add .
git commit -m "message"
git pull origin dev --allow-unrelated-histories
git push origin <branch-name>
```

> ⚠️ Use `git push --force` only if necessary.

---

✅ This guide helps **new members get started fast** and follow team standards.
