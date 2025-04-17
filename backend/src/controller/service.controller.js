import { delete_Service, get_All_Services, insert_Service, update_image, update_Service } from "../model/service.model.js";


export const insertService = async (req, res) => {
    try {

        // First get the form data
        const { serviceType, serviceName, serviceStatus } = await req.body;
        const { filename:service_logo } = await req.file;


        // Validate required fields
        if (!serviceType || !serviceName || !service_logo || !serviceStatus) {
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            });
        }

        // Insert service with file path
        const newService = await insert_Service(
            serviceType,
            serviceName,
            service_logo,
            serviceStatus
        );

        if (newService) {
            res.status(201).json({
                status: true,
                message: "Service created successfully",

            });
        } else {
            res.status(500).json({
                status: false,
                message: "Failed to create service"
            });
        }
    }
    catch (error) {
        console.error("Error in insertService:", error);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
export const getServices = async (req, res) => {
    try {
        const allServices = await get_All_Services();
        res.status(200).json({ result: allServices, message: "Services fetched successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message })
    }

}
export const editService = async (req, res) => {
    try {
        const {service_id,service_type,service_name,service_status} = req.body;
        const response=await update_Service(service_id,service_type,service_name,service_status)
        console.log(response)
        res.status(201).json({ message: "service updated successfully", status: true })
    } catch (error) {
        res.status(500).json({ message: "Internal server error in edit action", status: false })

    }
}
export const editLogo = async (req, res) => {
    try {
        const {ID:serviceID}=req.body;
        const {filename}=req.file;

        const response=await update_image(serviceID,filename)
        res.status(201).json({message:"Logo edited sucessfully",status:true})
    } catch (error) {
        console.log("Error in edit image action",error)
        res.status(500).json({message:"Internal server error",status:false})

    }
   
}