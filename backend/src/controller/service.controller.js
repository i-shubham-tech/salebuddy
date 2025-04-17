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
