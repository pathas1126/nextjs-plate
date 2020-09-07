import { render, fireEvent, waitFor } from "@testing-library/react";
import Index from "../pages/index";
import { Provider } from "react-redux";
import store from "../store/index";

describe("<Index/>", () => {
  it("render Hello World", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    getByText("Hello Next.js 👋");
  });
  it("count up correct", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    const increaseButton = getByText("+");
    const count = getByText("2");
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(count).toHaveTextContent("4");
    // expect(count.textContent).toBe("2");
  });
  it("count down async correct", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    const decreaseButton = getByText("-");
    const count = getByText("4");
    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    await waitFor(() => expect(count).toHaveTextContent("2"), {
      timeout: 1500,
    });
  });
  it("getStaticProps test", async () => {});
});
