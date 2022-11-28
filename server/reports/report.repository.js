const db = require("../db");

module.exports = {
  getCategoryReport: async (limit, offset) => {
    try {
      const result = await db.query(
        `SELECT
          pc.name AS "categoryName",
          COUNT(*)::INT AS "totalProducts",
          COUNT(pd.value)::INT AS "discountedProducts"
        FROM product p
        FULL OUTER JOIN product_category pc ON p.product_category_id = pc.id
        LEFT JOIN product_discount pd ON pd.product_id = p.id
        GROUP BY pc.id
        `
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
  getDiscountReport: async () => {
    try {
      const result = await db.query(
        `SELECT
          dt.type AS "discountType",
          COUNT(*)::INT AS "totalProducts"
        FROM product p
        LEFT JOIN product_discount pd ON pd.product_id = p.id
        LEFT JOIN discount_type dt ON pd.discount_type_id = dt.id
        GROUP BY dt.type
        `
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
