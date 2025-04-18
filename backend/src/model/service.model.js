import pool from '../config/db.config.js';

export const get_All_Services = async () => {
    try {
        const [rows] = await pool.execute('SELECT * FROM services');
        return rows;
    } catch (error) {
        throw new Error(`Error in DB fetching Allservices : ${error.message}`);
    }
};

export const get_Service_By_Id = async (id) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM services WHERE id = ?', [id]);
        return rows[0];
    } catch (error) {
        throw new Error(`Error in DB fetching servicebyid: ${error.message}`);
    }
};

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

export const update_Service = async (id, serviceType, serviceName, serviceStatus) => {
    try {
        const [result] = await pool.execute(
            'UPDATE services SET service_type = ?, service_name = ?, service_status = ? WHERE id = ?',
            [serviceType, serviceName, serviceStatus, id]
        );
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error(`Error in DB updating service: ${error.message}`);
    }
};

export const update_image = async (id, serviceLogo) => {
    try {
        const [result] = await pool.execute(
            'UPDATE services SET service_logo = ? WHERE id = ?',
            [serviceLogo, id]
        );
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error(`Error in DB updating image service: ${error.message}`);
    }
};

export const delete_Service = async (id) => {
    try {
        const [result] = await pool.execute('DELETE FROM services WHERE id = ?', [id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error(`Error in DB deleting service: ${error.message}`);
    }
};
