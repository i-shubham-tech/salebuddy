import { get_Product } from "../model/product.model.js";

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
