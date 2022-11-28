const request = require("supertest");
const path = require("path");
const jestOpenAPI = require("jest-openapi").default;
const {
  checkJwt,
  checkScopes,
} = require("../middleware/authorizationMiddleware");
jest.mock("../middleware/authorizationMiddleware");
const app = require("../app");
const db = require("../db");
const reportRepository = require("./report.repository");

jestOpenAPI(path.join(__dirname, "../apispec.yaml"));

describe("GIVEN that the GET /reports route exists", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    db.end();
  });

  test("WHEN the user is not authenticated THEN return status 401", async () => {
    checkJwt.mockImplementation((req, res, next) => {
      try {
        const error = new Error("Unauthorized");
        error.status = 401;
        throw error;
      } catch (e) {
        next(e);
      }
    });

    const response = await request(app)
      .get("/api/reports")
      .set("Accept", "application/json");

    expect(response.status).toBe(401);
    expect(response).toSatisfyApiSpec();
  });

  test("WHEN the user is authenticated but does not have the right permissions THEN return status 403", async () => {
    checkJwt.mockImplementation((req, res, next) => next());
    checkScopes.mockImplementation((req, res, next) => {
      try {
        const error = new Error("Forbidden");
        error.status = 403;
        throw error;
      } catch (e) {
        next(e);
      }
    });

    const response = await request(app)
      .get("/api/reports")
      .set("Accept", "application/json");

    expect(response.status).toBe(403);
    expect(response).toSatisfyApiSpec();
  });

  test("WHEN the user is authenticated THEN return status 200", async () => {
    checkJwt.mockImplementation((req, res, next) => next());
    checkScopes.mockImplementation((req, res, next) => next());

    const categoryReport = await reportRepository.getCategoryReport();
    const discountReport = await reportRepository.getDiscountReport();

    const expectedResponseData = {
      categoryReport,
      discountReport,
    };

    const response = await request(app)
      .get("/api/reports")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);
    expect(response).toSatisfyApiSpec();
  });
});
