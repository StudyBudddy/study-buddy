import Database from "better-sqlite3";

let db;
try {
  db = new Database("./studybuddy.db");
  console.log("SQLite connected");
} catch (err) {
  console.error("Failed to connect to SQLite:", err);
}

const createUserTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    ); 
`;

db.exec(createUserTable);

export default db;
