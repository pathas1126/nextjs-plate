import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("<PostOne/>", () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 });
  mock.onGet("https://jsonplaceholder.typicode.com/posts/3").reply(200, {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  });

  it("one post render", () => {});
});
