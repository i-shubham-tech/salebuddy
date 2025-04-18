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

export const get_All_Brand = async () => {
    try {
        const [result] =await pool.execute("select * from brands");
        return result;

    } catch (error) {
        console.log("Error in brand model getBrand", error);
    }
}

export const get_Brand_By_Id = async (brand_id) => {
    try {
        const [result] =await pool.execute("select * from brands where id=?", [brand_id]);
        return result;

    } catch (error) {
        console.log("Error in brand model getBrandById", error);
    }
}