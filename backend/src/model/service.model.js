import pool from '../config/db.config.js';


export const insert_Service = async (serviceType, serviceName, serviceLogo, serviceStatus) => {
    try {
        const [result] = await pool.execute(
            'INSERT INTO services (service_type, service_name, service_logo, service_status) VALUES (?, ?, ?, ?)',
            [serviceType, serviceName, serviceLogo, serviceStatus]
        );
        return result.insertId;
    } catch (error) {
        console.log(error)
        throw new Error(`Error in DB inserting service: ${error.message}`);
    }
};
