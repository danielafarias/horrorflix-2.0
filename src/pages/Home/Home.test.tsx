import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from ".";

describe("Home", () => {
  test("renders with movies", async () => {
    render(<Home />);

    const loading = screen.getByText("Carregando");

    expect(loading).toBeInTheDocument();

    const movie1 = await screen.findByText("Batem à Porta");
    const movie2 = await screen.findByText("Shark Side of the Moon");
    const movie3 = await screen.findByText("Pânico VI");
    const movie4 = await screen.findByText("M3GAN");
    const movie5 = await screen.findByText("Huesera");
    const movie6 = await screen.findByText("Nocebo");

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
    expect(movie3).toBeInTheDocument();
    expect(movie4).toBeInTheDocument();
    expect(movie5).toBeInTheDocument();
    expect(movie6).toBeInTheDocument();
  });

  test("should scroll to top when click top button", async () => {
    render(<Home />);

    window.scrollBy(0, 500);

    const topButton = await screen.findByTestId("top-button");

    window.scrollTo = jest.fn();

    userEvent.click(topButton);

    expect(window.scrollTo).toBeCalledWith({ top: 0, behavior: "smooth" });
  });

  test("renders paginate button", async () => {
    render(<Home />);

    const paginateButton = await screen.findByTestId("paginate-button");

    expect(paginateButton).toBeInTheDocument();
  });
});
