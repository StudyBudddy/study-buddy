import express from "express";
import db from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", authenticate, (req, res) => {
  try {
    const stmt = db.prepare(
      "SELECT * FROM todos WHERE user_id = ? ORDER BY created_at DESC",
    );
    const todos = stmt.all(req.user.userId);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

router.post("/", authenticate, (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  try {
    const stmt = db.prepare("INSERT INTO todos (user_id, task) VALUES (?, ?)");
    const result = stmt.run(req.user.userId, task);
    res.status(201).json({ id: result.lastInsertRowid, task, is_completed: 0 });
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});

router.put("/:id", authenticate, (req, res) => {
  const { is_completed } = req.body;
  try {
    const stmt = db.prepare(
      "UPDATE todos SET is_completed = ? WHERE id = ? AND user_id = ?",
    );
    const result = stmt.run(
      is_completed ? 1 : 0,
      req.params.id,
      req.user.userId,
    );

    if (result.changes === 0)
      return res.status(404).json({ error: "Todo not found" });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

router.delete("/:id", authenticate, (req, res) => {
  try {
    const stmt = db.prepare("DELETE FROM todos WHERE id = ? AND user_id = ?");
    const result = stmt.run(req.params.id, req.user.userId);

    if (result.changes === 0)
      return res.status(404).json({ error: "Todo not found" });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

export default router;
