import "@testing-library/jest-dom";

interface LinkProps {
  className: string;
  to: string;
  children: string;
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props: LinkProps) => (
    <a
      href={props.to}
      className={props.className}
      data-testid={props.className}
    >
      {props.children}
    </a>
  ),
}));
