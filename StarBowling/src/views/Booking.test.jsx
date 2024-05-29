import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import Booking from "./Booking";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";



// Define handlers for mocking API responses
const handlers = [
  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    async ({ request }) => {
      // Read the intercepted request body as JSON
      const newBooking = await request.json();
      console.log('Mock POST request body:', newBooking);


      // Return the newly created booking with a status of 201 Created
      return HttpResponse.json(
        {
          active: true,
          when: "2024-05-04T10:01",
          lanes: "1",
          people: "2",
          shoes: ["42", "43"],
          id: "STR7243KPOM",
          price: 340,
        },
        { status: 201 }
      );
    }
  ),
];

// Set up the server
const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Stop server after all tests
afterAll(() => server.close());

describe("Booking Component", () => {
  it("The user can make a booking request", async () => {
    render(<Booking />);

    // Fill in the form with test data
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2024-05-04" },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "10:01" },
    });
    fireEvent.change(screen.getByLabelText(/Number of lanes/i), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText(/Number of awesome bowlers/i), {
      target: { value: "2" },
    });

    // Add shoe sizes
    fireEvent.click(screen.getByText("+"));
    fireEvent.change(screen.getByLabelText(/Shoe size \/ person 1/i), {
      target: { value: "42" },
    });
    fireEvent.click(screen.getByText("+"));
    fireEvent.change(screen.getByLabelText(/Shoe size \/ person 2/i), {
      target: { value: "43" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    // Wait for the confirmation message to appear
    await waitFor(() => {
      //Check for the confirmation message
      expect(screen.getByText(/see you soon!/i)).toBeInTheDocument();
     
    });
    screen.debug();
  
  
  });


});
