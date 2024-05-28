import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Confirmation from "./Confirmation";

describe("Confirmation Component", () => {
  const mockSetConfirmation = vi.fn();
  const confirmationDetails = {
    active: true,
    when: "2024-06-12T18:00",
    people: 4,
    lanes: 1,
    id: "ABC123",
    price: 580,
  };

  beforeEach(() => {
    render(
      <Confirmation
        confirmationDetails={confirmationDetails}
        setConfirmation={mockSetConfirmation}
      />
    );
  });

  it("should display booking details correctly", () => {
    expect(screen.getByLabelText(/when/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/who/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/lanes/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/booking number/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });

  it("should call setConfirmation and navigate back when Sweet, lets go! button is clicked", () => {
    const backButton = screen.getByText(/sweet, let's go!/i);
    fireEvent.click(backButton);
    expect(mockSetConfirmation).toHaveBeenCalledWith({});
  });

  it("should display inga bookning gjord! när inga bookningar är aktiva", () => {
    render(
        <Confirmation
        confirmationDetails={{...confirmationDetails, active: false }}   // confirmationDetails is an object that contains details about a booking. If active is false, no booking is active.
        setConfirmation={mockSetConfirmation}
        />
    )
    const element = screen.queryByText(/inga bokning gjord!/i);
    console.log(element);
    expect(element).toBeInTheDocument();
  });

  it("renders confirmation component correctly", () => {
    // We define the props to pass to the confirmation component 
    const confirmationProps = {
      active: true,
      when: "2024-05-04T10:01",
      lanes: "1",
      people: "2",
      shoes: ["42", "43"],
      id: "STR7243KPOM",
      price: 340,
    };

    // Render the confirmation component directly to check the props 
    render (
      <Confirmation
        confirmationDetails={confirmationProps}
        setConfirmation={() => {}}
      />
    );
    screen.debug();

    // Assert the confirmation details 
    expect(screen.getByDisplayValue("2024-05-04 10:01")).toBeInTheDocument();
    expect(screen.getAllByDisplayValue("1")[0]).toBeInTheDocument();
    expect(screen.getByDisplayValue("STR7243KPOM")).toBeInTheDocument();
    expect(screen.getByText("340 sek")).toBeInTheDocument();
  });



});
