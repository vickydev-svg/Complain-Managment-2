import express from "express";
import { getComplain,deleteComplain,findComplain, resolveComplain, adminHistory} from "../controller/admin.js";
// import auth for the verification
import authAdmin from "../Middleware/authAdmin.js";
const router = express.Router();
router.get("/:department",authAdmin,getComplain);
router.post("/resolve/:id",authAdmin, resolveComplain);
router.delete("/:id",authAdmin,deleteComplain);
router.get("/complain/:id",authAdmin,findComplain);
router.get("/history/:department",authAdmin,adminHistory);

export default router;
