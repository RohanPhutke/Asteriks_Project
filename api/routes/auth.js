import express from "express"
import { loginStudent,loginAdmin, logout } from "../controllers/auth.js";

const router =  express.Router();

router.post("/loginstudent",loginStudent)
router.post("/loginadmin",loginAdmin)
router.post("/logout",logout)

export default router;