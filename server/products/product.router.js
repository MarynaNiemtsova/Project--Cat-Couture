const express = require("express");
const Joi = require("joi");
const router = express.Router();
const productRepository = require("./product.repository");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      const { limit, page } = req.query;

      const safeLimit = limit ? parseInt(limit) : 10;
      const safePage = page ? parseInt(page) : 1;

      const allProducts = await productRepository.getProducts();
      const products = await productRepository.getPagedProducts(
        safeLimit,
        safePage
      );

      const responseResults = {
        products,
        currentPage: safePage,
        itemsPerPage: safeLimit,
        totalItems: allProducts.length,
        totalPages: Math.ceil(allProducts.length / safeLimit),
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
