import { get_Product,insert_Product,update_ProductD,update_Product_Image } from "../model/product.model.js";

export const getProduct=async (req,res)=>{
    try {
        const response=await get_Product();
        if(response){
            res.status(200).json({result:response,status:true})
        }
        
    } catch (error) {
        console.log("error in product-action-getProduct",error)
        res.status(500).json({result:[],message:"Internal server error",status:true})

    }
}

export const insertProduct=async (req,res)=>{
    try {
        const {service_id,brand_id,product_name,product_discription}=req.body;
        const {filename:product_logo}=req.file;
        const response=await insert_Product(service_id,brand_id,product_name,product_discription,product_logo);
        if(response){
            res.status(200).json({message:"Product added successfully",status:true})
        }
        
    } catch (error) {
        console.log("error in product-action-insertProduct",error)
        res.status(500).json({result:[],message:"Internal server error",status:true})

    }
}


export const updateProductD=async (req,res)=>{
    try {
        console.log(req.body)
        const {product_id,service_id,brand_id,product_name,product_description}=req.body;
        const response=await update_ProductD(product_id,service_id,brand_id,product_name,product_description);
        if(response){
            res.status(200).json({message:"Product updated successfully",status:true})
        }
        
    } catch (error) {
        console.log("error in product-action-updateProductD",error)
        res.status(500).json({result:[],message:"Internal server error",status:true})

    }
}

export const updateProductL=async (req,res)=>{
    try {
        const {ID:product_id}=req.body;
        const {filename:product_logo}=req.file;
        const response=await update_Product_Image(product_id,product_logo);
        console.log(response)
        if(response){
            res.status(200).json({message:"Logo updated succesfully",status:true})
        }
        
    } catch (error) {
        console.log("error in product-action-updateProductLogo",error)
        res.status(500).json({message:"Internal server error",status:true})

    }
}