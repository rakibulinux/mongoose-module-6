import express from "express";
import {
  createUser,
  getAdminUsers,
  getSingleUser,
  getUsers,
} from "./user.controllers";

const router = express.Router();
router.post("/", createUser);
router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getSingleUser);
export default router;
