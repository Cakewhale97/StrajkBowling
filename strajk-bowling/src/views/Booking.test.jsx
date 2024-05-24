import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, beforeAll, afterEach } from "vitest";
import Booking from "./Booking";
import { server } from "../mocks/server";

beforeAll(() => server.listen ());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('submits the booking data', async () => {
    render(<Booking />);
     
    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    await waitFor(() => expect(screen.getByTestId('confirmation')).toBeInTheDocument());

    expect(screen.getByText(/booking number: ABC123/i)).toBeInTheDocument();



});