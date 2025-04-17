import express from "express";
import { insertBrand } from "../controller/brand.controller.js";


const router=express.Router();

router.post("/insertBrand",upload.single("Logo"),insertBrand)







export default  router;