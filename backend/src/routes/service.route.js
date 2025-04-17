import express from "express";
import { deleteService, editService, getServices, insertService, editLogo } from "../action/admin.action.js";
import upload from "../config/multer.config.js";

const router = express.Router();

router.post("/insertService", upload.single("Logo"), insertService);
router.get("/getServices", getServices);
router.put("/editService",editService)


export default router;
