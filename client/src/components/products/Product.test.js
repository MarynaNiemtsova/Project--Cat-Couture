import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  test("Renders a product with a discount", () => {
    render(
      <Product
        name="Test name"
        description="Test description"
        price="$10.00"
        imageName="test.jpg"
        imageDescription="Test image"
        discountType="fixed amount off"
        productDiscount={10}
      />
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Test name"
    );
    expect(screen.getByTestId("product-description")).toHaveTextContent(
      "Test description"
    );
    expect(screen.getByAltText("Test image")).toBeInTheDocument();

    expect(screen.getByText("Price", { exact: false })).toHaveTextContent(
      "$10.00"
    );
    expect(screen.getByRole("button")).toBeEnabled();
    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });

  test("Renders a product with default image", () => {
    render(
      <Product
        name="Test name"
        description="Test description"
        price="$10.00"
        imageName={null}
        imageDescription="Test image"
        discountType={null}
        discountValue={null}
      />
    );
    expect(screen.getByAltText("Default product cat")).toBeInTheDocument();
  });

  test("Renders a product with no discount", () => {
    render(
      <Product
        name="Test name"
        description="Test description"
        price="$10.00"
        imageName="test.jpg"
        imageDescription="Test image"
        discountType={null}
        discountValue={null}
      />
    );
    expect(screen.queryByTestId("badge")).toBeNull();
  });
});
