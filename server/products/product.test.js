const request = require("supertest");
const path = require("path");
const jestOpenAPI = require("jest-openapi").default;
const app = require("../app");
const db = require("../db");
const productRepository = require("./product.repository");

jestOpenAPI(path.join(__dirname, "../apispec.yaml"));
afterAll(() => {
  db.end();
});

test("WHEN there are products THEN return status 200 and an array of products", async () => {
  const totalProducts = await productRepository.getProducts();
  const defaultLimit = 10;

  const expectedResponseData = {
    products: await productRepository.getProducts(),
    currentPage: 1,
    itemsPerPage: defaultLimit,
    totalItems: totalProducts.length,
    totalPages: Math.ceil(parseInt(totalProducts.length) / defaultLimit),
  };

  const response = await request(app)
    .get("/api/products")
    .set("Accept", "application/json");

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectedResponseData);
  expect(response).toSatisfyApiSpec();
});

test("WHEN there are no products THEN return status 200 and an empty array", async () => {
  const totalProducts = await productRepository.getProducts();
  const defaultLimit = 10;
  const page = 1000;

  const expectedResponseData = {
    products: [],
    currentPage: page,
    itemsPerPage: defaultLimit,
    totalItems: totalProducts.length,
    totalPages: Math.ceil(parseInt(totalProducts.length) / defaultLimit),
  };

  const response = await request(app)
    .get(`/api/products?page=${page}`)
    .set("Accept", "application/json");

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectedResponseData);
  expect(response).toSatisfyApiSpec();
});
describe("WHEN the client sends a request for a specific number of products", () => {
  test("WHEN the limit query parameter is valid as per the API spec THEN return status 200 and an array of products", async () => {
    const totalProducts = await productRepository.getProducts();
    const limit = 10;

    const expectedResponseData = {
      products: await productRepository.getPagedProducts(limit, 1),
      currentPage: 1,
      itemsPerPage: limit,
      totalItems: totalProducts.length,
      totalPages: Math.ceil(parseInt(totalProducts.length) / limit),
    };

    const response = await request(app)
      .get(`/api/products?limit=${limit}`)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);
    expect(response).toSatisfyApiSpec();
  });

  test("WHEN the limit query parameter is not valid as per the API spec THEN return status 400 and an appropriate error message", async () => {
    const response = await request(app)
      .get("/api/products?limit=a")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('"limit" must be a number');
    expect(response).toSatisfyApiSpec();
  });
});

describe("WHEN the client sends a request for a specific page of products", () => {
  test("WHEN the page query parameter is valid as per the API spec THEN return 200 status code and an array of products", async () => {
    const totalProducts = await productRepository.getProducts();
    const page = 1;
    const limit = 8;

    const expectedResponseData = {
      products: await productRepository.getPagedProducts(limit, page),
      currentPage: 1,
      totalPages: Math.ceil(parseInt(totalProducts.length) / limit),
      itemsPerPage: limit,
      totalItems: totalProducts.length,
    };

    const response = await request(app)
      .get(`/api/products?limit=${limit}&page=${page}`)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);
    expect(response).toSatisfyApiSpec();
  });

  test("WHEN the page query parameter is not valid as per the API spec THEN return status 400 and an appropriate error message", async () => {
    const response = await request(app)
      .get("/api/products?page=a")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('"page" must be a number');
    expect(response).toSatisfyApiSpec();
  });
});
