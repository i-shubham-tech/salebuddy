import { get_Product,insert_Product } from "../model/product.model.js";

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