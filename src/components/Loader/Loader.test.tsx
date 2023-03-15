import { render, screen } from "@testing-library/react";

import Loader from ".";

describe("Loader", () => {
  test("renders items in component when loading", async () => {
    render(<Loader text="Carregando" alt="Loading" />);

    const text = screen.getByText("Carregando");
    const image = screen.getByAltText("Loading");

    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test("renders items in component when empty", async () => {
    render(<Loader text="Lista vazia" alt="Empty" />);

    const text = screen.getByText("Lista vazia");
    const image = screen.getByAltText("Empty");

    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test("renders items with correct styles", async () => {
    render(<Loader text="Carregando" alt="Loading" />);

    const text = screen.getByText("Carregando");

    expect(text).toHaveStyle('font-family: "Eater",cursive');
    expect(text).toHaveStyle("font-size: 3rem");
    expect(text).toHaveStyle("color: rgba(255, 255, 255, 0.3)");

    const image = screen.getByAltText("Loading");

    expect(image).toHaveStyle("padding: 1rem");
  });
});
