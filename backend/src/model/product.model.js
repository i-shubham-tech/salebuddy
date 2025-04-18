
export const get_Product = async () => {
    try {
        const [result] = await pool.execute(`
            select p.*,s.service_name,s.service_type,b.brand_name from products p
            inner join services s on p.service_id=s.id 
            inner join brands b on p.brand_id=b.brand_id`);
        return result;
    } catch (error) {
        console.log("Error in product model-get_Product ", error)
    }
}

export const insert_Product = async (service_id, brand_id, product_name, product_description, product_logo) => {
    try {
        const [result] = await pool.execute("insert into products (service_id, brand_id, product_name, product_description, product_logo) values(?,?,?,?,?)", [service_id, brand_id, product_name, product_description, product_logo]);
        return result.insertId;
    } catch (error) {
        console.log("Error in product model-insert_Product ", error)
    }
}

export const update_ProductD = async (product_id, service_id, brand_id, product_name, product_description) => {
    console.log(product_id, service_id, brand_id, product_name, product_description)
    try {
        const [result] = await pool.execute("update products set service_id=?, brand_id=?, product_name=?, product_description=? where product_id=?", [service_id, brand_id, product_name, product_description, product_id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.log("Error in product model-update_ProductD ", error)
    }
}
