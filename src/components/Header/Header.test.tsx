import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  test("renders all items in component", async () => {
    render(<Header />);

    const logo = screen.getByTestId("logo");
    const listAnchor = screen.getByTestId("list");
    
    expect(logo).toBeInTheDocument();
    expect(listAnchor).toBeInTheDocument();
  });

  test("renders logo with the correct attributes", async () => {
    render(<Header />);

    const logo = screen.getByTestId("logo");

    expect(logo.getAttribute("href")).toBe("/");
    expect(logo.getAttribute("class")).toBe("logo");

    expect(logo.textContent).toBe("Horrorflix");
  });

  test("renders list anchor with the correct attributes", async () => {
    render(<Header />);

    const listAnchor = screen.getByTestId("list");
    const favoriteIcon = screen.getByTestId("favorite-icon");

    expect(listAnchor.getAttribute("href")).toBe("/lista");
    expect(listAnchor.getAttribute("class")).toBe("list");

    expect(favoriteIcon).toBeInTheDocument();
  });

  test("renders logo with correct style", async () => {
    render(<Header />);

    const logo = screen.getByTestId("logo");

    expect(logo).toHaveStyle("font-size: 2.5rem");
    expect(logo).toHaveStyle("color: var(--primary)");
    expect(logo).toHaveStyle('font-family: "Creepster",cursive');
  });

  test("renders list anchor with correct style", async () => {
    render(<Header />);

    const listAnchor = screen.getByTestId("list");

    expect(listAnchor).toHaveStyle("color: var(--text2)");
    expect(listAnchor).not.toHaveStyle("font-family: 'Creepster',cursive");
  });
});
