import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Registration Form", () => {
  test("renders the registration form", () => {
    render(<Form />);
    expect(
      screen.getByRole("heading", { name: /registration form/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("shows error if password is less than 6 characters", async () => {
    render(<Form />);
    userEvent.type(screen.getByPlaceholderText("First Name"), "Ayush");
    userEvent.type(screen.getByPlaceholderText("Last Name"), "Kumar");
    userEvent.type(screen.getByPlaceholderText("Email"), "test@test.com");
    userEvent.type(screen.getByPlaceholderText("Password"), "123");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(await screen.findByText("Password is short")).toBeInTheDocument();
  });

  test("submits form successfully when password is valid", () => {
    render(<Form />);
    userEvent.type(screen.getByPlaceholderText("First Name"), "Ayush");
    userEvent.type(screen.getByPlaceholderText("Last Name"), "Kumar");
    userEvent.type(screen.getByPlaceholderText("Email"), "test@test.com");
    userEvent.type(screen.getByPlaceholderText("Password"), "123456");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.queryByText("Password is short")).not.toBeInTheDocument();
  });
});
