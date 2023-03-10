import { fireEvent, render, screen } from "@testing-library/react";
import Slider from ".";

describe("Slider", () => {
  const sliderArray = [
    {
      id: 631842,
      title: "Batem à Porta",
      imagePath: "/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg",
    },
    {
      id: 1011679,
      title: "Shark Side of the Moon",
      imagePath: "/v5CfpzxoJDkZxjZAizClFdlEF0U.jpg",
    },
    {
      id: 536554,
      title: "M3GAN",
      imagePath: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    },
    {
      id: 772515,
      title: "Huesera",
      imagePath: "/7NhG3NClQ1xrc3kEwTiwFht5Y3L.jpg",
    },
    {
      id: 996727,
      title: "The Price We Pay",
      imagePath: "/8fwJt0qZieQ7dKaiiqehObWpXYT.jpg",
    },
    {
      id: 676547,
      title: "A Luz do Demônio",
      imagePath: "/mYa1vhjTYakyNCB65lR8Y7jujBn.jpg",
    },
  ];

  test("renders relevant items in component", async () => {
    render(<Slider sliderArray={sliderArray} />);

    const leftButton = screen.getByTestId("left-btn");
    const rightButton = screen.getByTestId("right-btn");

    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();

    const motionContainer = screen.getByTestId("motion-container");
    
    expect(motionContainer).toBeInTheDocument();

    const motionCard1 = screen.getByTestId("motion-card-631842");
    const motionCard2 = screen.getByTestId("motion-card-1011679");
    const motionCard3 = screen.getByTestId("motion-card-536554");
    const motionCard4 = screen.getByTestId("motion-card-772515");
    const motionCard5 = screen.getByTestId("motion-card-996727");
    const motionCard6 = screen.getByTestId("motion-card-676547");

    expect(motionCard1).toBeInTheDocument();
    expect(motionCard2).toBeInTheDocument();
    expect(motionCard3).toBeInTheDocument();
    expect(motionCard4).toBeInTheDocument();
    expect(motionCard5).toBeInTheDocument();
    expect(motionCard6).toBeInTheDocument();

    const image = screen.getByAltText("A Luz do Demônio");

    expect(image).toBeInTheDocument();

    const title = screen.getByText("A Luz do Demônio");

    expect(title).toBeInTheDocument();

    const infoButton = screen.getByTestId("info-btn-631842");
    const likeButton = screen.getByTestId("like-btn-631842");

    expect(infoButton).toBeInTheDocument();
    expect(likeButton).toBeInTheDocument();
  });

  test("renders relevant items with correct styles", async () => {
    render(<Slider sliderArray={sliderArray} />);

    const leftButton = screen.getByTestId("left-btn");

    expect(leftButton).toHaveStyle("background-color: transparent");
    expect(leftButton).toHaveStyle("border: none");

    const rightButton = screen.getByTestId("right-btn");

    expect(rightButton).toHaveStyle("background-color: transparent");
    expect(rightButton).toHaveStyle("border: none");

    const image = screen.getByAltText("A Luz do Demônio");

    expect(image).toHaveStyle("height: 450px");
    expect(image).toHaveStyle("max-width: 294px");
    expect(image).toHaveStyle("object-fit: cover");
    expect(image).toHaveStyle("border-radius: 2rem 2rem 0 0");

    const title = screen.getByText("A Luz do Demônio");

    expect(title).toHaveStyle("font-size: 1.2rem");
    expect(title).toHaveStyle("color: var(--text1)");
    expect(title).toHaveStyle("line-height: 1");
    expect(title).toHaveStyle("font-weight: 800");

    const likeButton = screen.getByTestId("like-btn-631842");

    expect(likeButton).toHaveStyle("background-color: transparent");
  });

  test("should scroll to the left when the left button is clicked", () => {
    render(<Slider sliderArray={sliderArray} />);

    const leftButton = screen.getByTestId("left-btn");
    const motionContainer = screen.getByTestId("motion-container");

    fireEvent.click(leftButton);

    expect(motionContainer.scrollLeft).toBe(-210);
  });

  test("should scroll to the right when the right button is clicked", () => {
    render(<Slider sliderArray={sliderArray} />);

    const rightButton = screen.getByTestId("right-btn");
    const motionContainer = screen.getByTestId("motion-container");

    fireEvent.click(rightButton);

    expect(motionContainer.scrollLeft).toBe(210);
  });
});
