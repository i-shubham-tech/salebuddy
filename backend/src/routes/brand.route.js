import express from "express";
import upload from "../config/multer.config.js";
import { insertBrand } from "../controller/brand.controller.js";


const router=express.Router();

router.post("/insertBrand",upload.single("Logo"),insertBrand)
router.get("/getBrand",getBrand)
router.put("/updateBrand",updateBrand)
router.put("/updateLogo",upload.single("Logo"),updateLogo)
router.delete("/deleteBrand/:brand_id",deleteBrand)










export default  router;