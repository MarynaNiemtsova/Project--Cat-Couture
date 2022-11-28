import { rest } from "msw";

const productsPageOneMock = {
  products: [
    {
      id: 1,
      name: "Angel Wings Harness",
      description:
        "The purrrfect accessory to take your kitty to the next level.",
      price: "$10.00",
      categoryName: "Costumes",
      imageName: "cat-photo_0000.jpg",
      imageDescription: "Wings harness",
      discountValue: null,
      discountType: null,
    },
  ],
  currentPage: 1,
  totalPages: 2,
  itemsPerPage: 1,
  totalItems: 2,
};

const productsPageTwoMock = {
  products: [
    {
      id: 2,
      name: "Deluxe Carry Bag Orange",
      description: "Backpack-style carry bag with dome.",
      price: "$20.00",
      categoryName: "Accessories",
      imageName: "cat-photo_0001.jpg",
      imageDescription: "Deluxe Carry Bag Orange",
      discountValue: 1,
      discountType: "fixed amount off",
    },
  ],
  currentPage: 2,
  totalPages: 2,
  itemsPerPage: 1,
  totalItems: 2,
};

const reportsMock = {
  categoryReport: [
    {
      categoryName: "Accessories",
      totalProducts: 20,
      discountedProducts: 2,
    },
  ],
  discountReport: [
    {
      discountType: "fixed amount off",
      totalProducts: 2,
    },
  ],
};

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/products`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const limit = query.get("limit");
    const page = query.get("page");
    if (!(limit && page) || page === "1") {
      return res(ctx.json(productsPageOneMock));
    } else {
      return res(ctx.json(productsPageTwoMock));
    }
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/reports`, (req, res, ctx) => {
    return res(ctx.json(reportsMock));
  }),
];
