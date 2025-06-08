import db from "../config/db.js";

export const addEngineer = (data, callback) => {
  const { name, skills, seniority, maxCapacity, department } = data;
  const query =
    "INSERT INTO engineers (name, skills, seniority, maxCapacity, department) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, skills, seniority, maxCapacity, department], callback);
};

export const getAllEngineers = (callback) => {
  db.query("SELECT * FROM engineers", callback);
};
