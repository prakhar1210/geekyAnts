import express from "express";
import {
  getAllEngineers,
  addEngineer,
  getEngineerCapacity,
} from "../controllers/engineerController.js";

const router = express.Router();

router.get("/", getAllEngineers);
router.post("/", addEngineer);
router.get("/:id/capacity", getEngineerCapacity);

export default router;
