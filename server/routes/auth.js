
import express from 'express';
import { StudentSignin ,AdminSignin} from "../controller/auth.js";
const router = express.Router();
router.post("/student/signin",StudentSignin);
router.post("/admin/signin",AdminSignin);



export default router;