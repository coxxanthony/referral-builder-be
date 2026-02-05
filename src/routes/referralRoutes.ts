import { Router } from "express";
import { fetchReferrals, addReferral } from "../controllers/referralController";

const router = Router();

router.get("/", fetchReferrals);
router.post("/", addReferral);

export default router;
