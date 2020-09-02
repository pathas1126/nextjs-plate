import { render } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
  it("renders Index without crashing", () => {
    const utils = render(<Index />);
    expect(utils.container).toMatchSnapshot();
  });
  it("render Hello World", () => {
    const { getByText } = render(<Index />);
    getByText("Hello Next.js 👋");
  });
});
