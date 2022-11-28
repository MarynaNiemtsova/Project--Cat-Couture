import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  test("The header renders", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/cat couture/i)).toBeInTheDocument();
  });
});
