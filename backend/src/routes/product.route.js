import express from 'express';
import upload from '../config/multer.config.js';
import { getProduct,insertProduct,updateProductD,updateProductL } from '../controller/product.controller.js';

const router =express.Router();

router.get("/getProduct",getProduct);
router.post("/insertProduct",upload.single("Logo"),insertProduct);
router.put("/updateProductD",updateProductD);
router.put("/updateProductL",upload.single("Logo"),updateProductL);





export default router;