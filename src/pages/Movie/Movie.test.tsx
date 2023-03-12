import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Movie from ".";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "631842" }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

beforeEach(() => {
  localStorage.clear();
});

describe("Movie", () => {
  test("renders all items in component", async () => {
    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    const title = await screen.findByText("Batem à Porta");
    const sinopse = await screen.findByText(
      "Durante as férias em uma cabana remota, uma jovem e seus pais são feitos reféns por quatro estranhos armados que exigem que a família faça uma escolha impensável para evitar o apocalipse. Com acesso limitado ao mundo exterior, a família deve decidir no que acredita antes que tudo esteja perdido."
    );
    const image = await screen.findByAltText("Batem à Porta");

    expect(title).toBeInTheDocument();
    expect(sinopse).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    const saveButton = await screen.findByTestId("save-btn");
    const trailerButton = await screen.findByTestId("trailer-btn");

    expect(saveButton).toBeInTheDocument();
    expect(trailerButton).toBeInTheDocument();

    const voteContainer = await screen.findByTestId("vote-container");

    userEvent.hover(voteContainer);

    const average = await screen.findByText("6,4");

    expect(average).toBeInTheDocument();
  });

  test("should save movie when click save button", async () => {
    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    const saveButton = await screen.findByTestId("save-btn");

    userEvent.click(saveButton);

    const savedMovie = localStorage.getItem("@horrorflix");

    expect(savedMovie).toEqual(
      '[{"title":"Batem à Porta","imagePath":"/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg","id":631842}]'
    );
  });

  test("renders trailer button with correct attributes", async () => {
    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    const trailerButton = await screen.findByTestId("trailer-btn");

    expect(trailerButton).toBeVisible();
    expect(trailerButton).toHaveAccessibleName("Trailer");
    expect(trailerButton).toHaveAttribute("rel", "external");
    expect(trailerButton).toHaveAttribute("target", "_blank");
    expect(trailerButton).toHaveAttribute(
      "href",
      "https://www.youtube.com/results?search_query=Batem à Porta"
    );
  });

  test("renders buttons with correact styles", async () => {
    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    const saveButton = await screen.findByTestId("save-btn");
    const trailerButton = await screen.findByTestId("trailer-btn");

    expect(trailerButton).toHaveStyle("border: 2px solid var(--text2)");
    expect(trailerButton).toHaveStyle("background-color: var(--text2)");

    expect(trailerButton).toHaveStyle("color: var(--secondary)");
    expect(trailerButton).toHaveStyle("margin-right: 1rem");
    expect(trailerButton).toHaveStyle("display: flex");
    expect(trailerButton).toHaveStyle("align-items: center");
    expect(trailerButton).toHaveStyle("padding: 0.5rem");
    expect(trailerButton).toHaveStyle("font-weight: bold");
    expect(trailerButton).toHaveStyle("border-radius: 5px");
    expect(trailerButton).toHaveStyle("cursor: pointer");
    expect(trailerButton).toHaveStyle("justify-content: center");
    expect(trailerButton).toHaveStyle("font-size: 1.5rem");
    expect(trailerButton).toHaveStyle("max-width: 6rem");

 
    expect(saveButton).toHaveStyle("margin-right: 1rem");
    expect(saveButton).toHaveStyle("display: flex");
    expect(saveButton).toHaveStyle("align-items: center");
    expect(saveButton).toHaveStyle("padding: 0.5rem");
    expect(saveButton).toHaveStyle("font-weight: bold");
    expect(saveButton).toHaveStyle("border-radius: 5px");
    expect(saveButton).toHaveStyle("cursor: pointer");
    expect(saveButton).toHaveStyle("justify-content: center");
    expect(saveButton).toHaveStyle("font-size: 1.5rem");
    expect(saveButton).toHaveStyle("max-width: 6rem");

    userEvent.hover(trailerButton);
    
    expect(trailerButton).toHaveStyle("color: var(--text2)");
  });

  test("renders with background image", async () => {
    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    const container = await screen.findByTestId("movie-container");

    expect(container).toHaveStyle("background-image: url(https://image.tmdb.org/t/p/original//zWDMQX0sPaW2u0N2pJaYA8bVVaJ.jpg)");
  });
});
