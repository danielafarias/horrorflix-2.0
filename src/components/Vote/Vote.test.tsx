import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Vote from ".";

describe("Vote", () => {
  test("renders all icons in component", async () => {
    render(<Vote average={6.5}/>);

    const dropEmpty = screen.getAllByTestId("drop-empty");
    const dropHalf = screen.getByTestId("drop-half");
    const dropFill = screen.getAllByTestId("drop-fill");

    expect(dropHalf).toBeInTheDocument();

    expect(dropEmpty[0]).toBeInTheDocument();
    expect(dropEmpty[1]).toBeInTheDocument();
    expect(dropEmpty[2]).toBeInTheDocument();

    expect(dropFill[0]).toBeInTheDocument();
    expect(dropFill[1]).toBeInTheDocument();
    expect(dropFill[2]).toBeInTheDocument();
    expect(dropFill[3]).toBeInTheDocument();
    expect(dropFill[4]).toBeInTheDocument();
    expect(dropFill[5]).toBeInTheDocument();
  });

  test("renders just empty icons in component", async () => {
    render(<Vote average={0}/>);

    const dropEmpty = screen.getAllByTestId("drop-empty");

    expect(dropEmpty[0]).toBeInTheDocument();
    expect(dropEmpty[1]).toBeInTheDocument();
    expect(dropEmpty[2]).toBeInTheDocument();
    expect(dropEmpty[3]).toBeInTheDocument();
    expect(dropEmpty[4]).toBeInTheDocument();
    expect(dropEmpty[5]).toBeInTheDocument();
    expect(dropEmpty[6]).toBeInTheDocument();
    expect(dropEmpty[7]).toBeInTheDocument();
    expect(dropEmpty[8]).toBeInTheDocument();
    expect(dropEmpty[9]).toBeInTheDocument();
  });

  test("renders just fill icons in component", async () => {
    render(<Vote average={10}/>);

    const dropFill = screen.getAllByTestId("drop-fill");

    expect(dropFill[0]).toBeInTheDocument();
    expect(dropFill[1]).toBeInTheDocument();
    expect(dropFill[2]).toBeInTheDocument();
    expect(dropFill[3]).toBeInTheDocument();
    expect(dropFill[4]).toBeInTheDocument();
    expect(dropFill[5]).toBeInTheDocument();
    expect(dropFill[6]).toBeInTheDocument();
    expect(dropFill[7]).toBeInTheDocument();
    expect(dropFill[8]).toBeInTheDocument();
    expect(dropFill[9]).toBeInTheDocument();
  });

  test("renders all icons with correct styles", async () => {
    render(<Vote average={6.5}/>);

    const dropEmpty = screen.getAllByTestId("drop-empty");
    const dropHalf = screen.getByTestId("drop-half");
    const dropFill = screen.getAllByTestId("drop-fill");

    expect(dropHalf).toHaveStyle('color: var(--primary);');
    expect(dropEmpty[0]).toHaveStyle('color: var(--primary);');
    expect(dropFill[0]).toHaveStyle('color: var(--primary);');
  });
  
  test("renders tooltip in component", async () => {
    render(<Vote average={6.5}/>);

    const container = screen.getByTestId("vote-container");

    userEvent.hover(container);

    const tooltip = screen.getByText("6,5");

    expect(tooltip).toBeInTheDocument();
  });
});
