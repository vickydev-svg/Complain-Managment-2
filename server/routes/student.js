import express from "express";
import { getComplain, createComplain,deleteComplain,findComplain, studentHistory} from "../controller/student.js";
import authStudent from "../Middleware/authStudent.js";
// import auth for the verification
const router = express.Router();
router.get("/",authStudent,getComplain);
router.post("/add",authStudent,createComplain);
router.delete("/:id",authStudent,deleteComplain);
router.get("/complain/:id",authStudent,findComplain);
router.get("/history/:rollno",authStudent,studentHistory);


export default router;
