import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";

test("renders Name textarea and Submit button", () => {
  render(<Home />);

  // Check if textarea and button exist
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});
