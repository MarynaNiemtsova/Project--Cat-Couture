import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

describe("ProductList", () => {
  test("Renders a list of products", () => {
    const products = [
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
    ];
    render(<ProductList products={products} />);
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
  test("WHEN there are no products THEN the product list is empty", () => {
    const products = [];
    render(<ProductList products={products} />);
    expect(screen.queryAllByRole("listitem")).toStrictEqual([]);
  });
  test("WHEN there is one product THEN one product is rendered", () => {
    const products = [
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
    ];
    render(<ProductList products={products} />);
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });
});
