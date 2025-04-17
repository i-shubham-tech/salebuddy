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
