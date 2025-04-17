import pool from "../config/db.config.js"

export const insert_Brand = async (brand_name, brand_logo) => {
    try {
        const [result] =await pool.execute("insert into brands (brand_name,brand_logo) values (?,?)",
            [brand_name, brand_logo])
        return result.insertId;

    } catch (error) {
        console.log("Error in brand model insertBrand", error);
    }
}