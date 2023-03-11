import { render, screen } from "@testing-library/react";
import Loader from ".";

describe("Loader", () => {
  test("renders all items in component", async () => {
    render(<Loader />);

    const text = screen.getByText("Carregando");
    const image = screen.getByAltText("Loading");

    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test("renders items with correct styles", async () => {
    render(<Loader />);

    const text = screen.getByText("Carregando");

    expect(text).toHaveStyle('font-family: "Eater",cursive');
    expect(text).toHaveStyle("font-size: 3rem");
    expect(text).toHaveStyle("color: rgba(255, 255, 255, 0.3)");

    const image = screen.getByAltText("Loading");

    expect(image).toHaveStyle("padding: 1rem");
  });
});
