
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
