import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GetPost from "./GetPost";

describe("GetPost component", () => {
  test("fetches post and displays title", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: "Mocked Post Title",
          }),
      })
    );

    render(<GetPost />);

    expect(
      screen.getByRole("heading", { name: /fetched title/i })
    ).toBeInTheDocument();

    expect(await screen.findByText("Mocked Post Title")).toBeInTheDocument();

    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
  });
});
