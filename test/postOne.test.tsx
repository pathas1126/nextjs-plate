import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import PostOne from "../pages/posts/[id]";
import { Provider } from "react-redux";
import store from "../store";

describe("<PostOne/>", () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 });
  const mockPost = {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  };

  mock
    .onGet("https://jsonplaceholder.typicode.com/posts/3")
    .reply(200, mockPost);

  it("one post render", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <PostOne post={mockPost} />
      </Provider>
    );
    await waitFor(() => getByText(mockPost.title));
  });
});
