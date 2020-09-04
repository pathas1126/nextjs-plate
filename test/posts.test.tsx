import { render, fireEvent } from "@testing-library/react";
import Posts from "../pages/posts/";
import { Provider } from "react-redux";
import store from "../store";

describe("<Posts/>", () => {
  it("get Posts successfully", () => {
    const { getByText, findByText } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );
    const getPostsButton = getByText("getPosts");
    fireEvent.click(getPostsButton);
    findByText("로딩중입니다...");
    findByText("DELETE");
  });
});
