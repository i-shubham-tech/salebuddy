import express from 'express';
import upload from '../config/multer.config.js';
import { getProduct } from '../controller/product.controller.js';

const router =express.Router();

router.get("/getProduct",getProduct);



export default router;