import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CounterClass from "./CounterClass";

describe("Counter component", () => {
  test("renders initial count as 0", () => {
    render(<CounterClass />);

    expect(screen.getByText("Count : 0")).toBeInTheDocument();
  });

  test("increments count when +1 button is clicked", async () => {
    render(<CounterClass />);

    const user = userEvent.setup();
    await user.click(screen.getByText("+1"));

    expect(screen.getByText("Count : 1")).toBeInTheDocument();
  });

  test("reset count when Reset button is clicked", async () => {
    render(<CounterClass />);

    const user = userEvent.setup();
    await user.click(screen.getByText("+1"));
    await user.click(screen.getByText("Reset"));

    expect(screen.getByText("Count : 0")).toBeInTheDocument();
  });
});
