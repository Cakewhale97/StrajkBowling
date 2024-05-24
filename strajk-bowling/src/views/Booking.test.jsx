import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  beforeAll,
  afterEach,
} from "vitest";
import Booking from "./Booking";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("Booking Component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should handle successful booking", async () => {
    render(<Booking />);

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2024-06-12" },
    });
    fireEvent.change(screen.getByLabelText(/number of awesome bowlers/i), {
      target: { value: "4" },
    });

    fireEvent.click(screen.queryAllByText(/strIIIIIike!/i)[0]);

    await waitFor(() => screen.queryAllByAltText(/see you soon!/i));

    expect(screen.getByText(/see you soon!/i)).toBeInTheDocument();
  });
});
