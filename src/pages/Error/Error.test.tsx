import { render, screen } from "@testing-library/react";
import Error from ".";

describe("Error", () => {
  test("renders all items in component", async () => {
    render(<Error />);

    const text = screen.getByText("Ops... Festa errada!");
    const image = screen.getByAltText("Not Found");
    const button = screen.getByTestId("error-btn");

    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("renders with correct styles", async () => {
    render(<Error />);

    const text = screen.getByText("Ops... Festa errada!");

    expect(text).toHaveStyle("font-size: 3rem");
    expect(text).toHaveStyle("color: var(--text1)");
    expect(text).toHaveStyle('font-family: "Creepster",cursive');

    const button = screen.getByTestId("error-btn");

    expect(button).toHaveStyle("background-color: var(--primary)");
    expect(button).toHaveStyle("border: 2px solid var(--primary)");
    expect(button).toHaveStyle("color: var(--secondary)");
    expect(button).toHaveStyle("border-radius: 5px");
    expect(button).toHaveStyle("cursor: pointer");
    expect(button).toHaveStyle("font-size: 2rem");
    expect(button).toHaveStyle("padding: 0.5rem");
    expect(button).toHaveStyle("font-weight: bold");
  });

  test("renders button with correct href", async () => {
    render(<Error />);
    const button = screen.getByTestId("error-btn");

    expect(button.getAttribute("href")).toBe("/");
  });
});
