import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import BookingInfo from "./BookingInfo";

describe("BookingInfo Component", () => {
    let mockUpdateBookingDetails;

    beforeEach(() => {
        mockUpdateBookingDetails = vi.fn();
        render(<BookingInfo updateBookingDetails={mockUpdateBookingDetails} />);
    });



  // it("should render all input fields", () => {
  //   expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  //   expect(
  //     screen.getByLabelText(/number of awesome bowlers/i)
  //   ).toBeInTheDocument();
  //   expect(screen.getByLabelText(/number of lanes/i)).toBeInTheDocument();
  // });

 

  it('should call updateBookingDetails on date change', () => {
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2024-06-12' } });
    // expect(mockUpdateBookingDetails).toHaveBeenCalled();
    const event = mockUpdateBookingDetails.mock.calls[0][0];
    // expect(event.target.name).toBe('when');
    // expect(event.target.value).toBe('2024-06-12');
  });

  // it("should call updateBookingDetails on time change", () => {
  //   const timeInput = screen.getByLabelText(/time/i);
  //   fireEvent.change(timeInput, {target: {value: '18:00'}});
  //   expect(mockUpdateBookingDetails).toHaveBeenCalled();
  //   const event = mockUpdateBookingDetails.mock.calls[0][0];
  //   expect(event.target.name).toBe('time');
  //   expect(event.target.value).toBe('18:00');
  // });

  // it("should call updateBookingDetails on number of awesome bowlers change", () => {
  //   const peopleInput = screen.getByLabelText(/number of awesome bowlers/i);
  //   fireEvent.change(peopleInput, {target: {value: '4'}});
  //   expect(mockUpdateBookingDetails).toHaveBeenCalled();
  //   const event = mockUpdateBookingDetails.mock.calls[0][0];
  //   expect(event.target.name).toBe('people');

  // });

  // it("should call updateBookingDetails on number of lanes change", () => {
  //   const lanesInput = screen.getByLabelText((/number of lanes/i));
  //   fireEvent.change(lanesInput, {target: {value: '2'}});
  //   expect(mockUpdateBookingDetails).toHaveBeenCalled();
  //   const event = mockUpdateBookingDetails.mock.calls[0][0];
  //   expect(event.target.name).toBe('lanes');

  // })


});

