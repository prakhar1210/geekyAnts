import db from "../models/db.js";

// Get all engineers
export const getAllEngineers = (req, res) => {
  const sql = "SELECT * FROM engineers";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// Add new engineer
export const addEngineer = (req, res) => {
  const { name, skills, seniority, maxCapacity, department } = req.body;
  const sql = `INSERT INTO engineers (name, skills, seniority, maxCapacity, department)
               VALUES (?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [name, skills, seniority, maxCapacity, department],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Engineer added successfully!",
        id: result.insertId,
      });
    }
  );
};

// Get engineer capacity
export const getEngineerCapacity = (req, res) => {
  const engineerId = req.params.id;
  const sql = `SELECT * FROM engineers WHERE id = ?`;
  db.query(sql, [engineerId], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0)
      return res.status(404).json({ message: "Engineer not found" });
    res.json(result[0]);
  });
};
