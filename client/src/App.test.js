import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("The app renders", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/cat couture/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  test("Renders Page Not Found when the route does not exist", () => {
    const history = createMemoryHistory();
    history.push("/bad-page");
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
