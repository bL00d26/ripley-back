import { Router } from "express";
import { getUsers, createUser, getAverageAge } from "../controllers/users";

const router = Router();

router.post("/create", createUser);
router.get("/average-age", getAverageAge);
router.get("/all", getUsers);

export default router;
