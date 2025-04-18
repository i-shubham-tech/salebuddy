import express from 'express';
import upload from '../config/multer.config.js';
import { getProduct,insertProduct } from '../controller/product.controller.js';

const router =express.Router();

router.get("/getProduct",getProduct);
router.post("/insertProduct",upload.single("Logo"),insertProduct);




export default router;