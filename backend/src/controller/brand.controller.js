import { insert_Brand } from "../model/brand.model.js";

export const insertBrand = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.file)
        const { brand_name } = req.body;
        const { filename: brand_logo } = req.file;

        const response = await insert_Brand(brand_name, brand_logo)
        if (response) {
            res.status(201).json({ message: "Brand created successfully", status: true })
        }

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", status: false })
        console.log("Error in brand action insertBrand", error)
    }



}
export const getBrand=async(req,res)=>{
    try {
        
        const response=await get_All_Brand();
        if(response){
            res.status(201).json({result:response,status:true})
        }
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",status:false})
        console.log("Error in brand action getBrand",error)
    }

    

}


export const updateBrand=async(req,res)=>{
    try {
        const {brand_id,brand_name}=req.body;
        const response=await update_Brand_Data(brand_id,brand_name);
        if(response){
            res.status(200).json({message:"Brand updated succesfully",status:true})
        }
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",status:false})
        console.error("Error in brand action updateBrand",error)
    }

    

}