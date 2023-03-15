import { act, render, screen, waitFor } from "@testing-library/react";

import List from ".";

beforeEach(() => {
  localStorage.clear();
});

describe("List", () => {
  test("renders empty list", async () => {
    render(<List />);

    const text = screen.getByText("Lista vazia");
    const image = screen.getByAltText("Empty");

    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test("renders list with saved movie", async () => {
    act(() => {
      localStorage.setItem(
        "@horrorflix",
        '[{"id":631842,"title":"Batem à Porta","imagePath":"/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg"}]'
      );
    });

    const savedMovie = localStorage.getItem("@horrorflix");

    expect(savedMovie).toEqual(
      '[{"id":631842,"title":"Batem à Porta","imagePath":"/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg"}]'
    );

    render(<List />);

    const deleteButton = screen.getByTestId("delete-btn-631842");

    expect(deleteButton).toBeInTheDocument();
  });
});
