import "@testing-library/jest-dom";
import { server } from "./server/mswServer";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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
