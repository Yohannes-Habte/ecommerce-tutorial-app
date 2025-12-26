import express from "express";
import { getFooterSections } from "../../controllers/constants/controller.js";

const router = express.Router();

router.get("/footer", getFooterSections);

export default router;
