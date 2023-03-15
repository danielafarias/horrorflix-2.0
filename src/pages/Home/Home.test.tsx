import { render, screen } from "@testing-library/react";

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
});
