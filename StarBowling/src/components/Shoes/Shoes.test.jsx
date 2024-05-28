import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, beforeEach, vi} from 'vitest';
import Shoes from "./Shoes";
import { nanoid } from 'nanoid';

describe('Shoes Component', () => {
    const mockUpdateSize = vi.fn();
    const mockAddShoe = vi.fn();
    const mockRemoveShoe = vi.fn();
    const shoes = [ 
        { id: nanoid(), size: ""},
        { id: nanoid(), size: ""},
    ];

    beforeEach(() => {
        render(
            <Shoes
            updateSize={mockUpdateSize}
            addShoe={mockAddShoe}
            removeShoe={mockRemoveShoe}
            shoes={shoes}
            />
        );
    });

    it("should render the correct number of shoe inputs", () => {
        const shoeSizeInputs = screen.getAllByLabelText(/shoe size \/ person \d+/i);
        expect(shoeSizeInputs).toHaveLength(shoes.length);
    });

    it("should call addShoe when the add button is clicked", () => {
        const addButton = screen.getByText('+');
        fireEvent.click(addButton);
        expect(mockAddShoe).toHaveBeenCalled();
    })

    it("should call removeShoe when the remove button is clicked", () => {
        const removeButton = screen.getAllByText("-")[0];
        fireEvent.click(removeButton);
        expect(mockRemoveShoe).toHaveBeenCalled();
    })

    it('should call updateSize when the shoe size input is changed', () => {
        const shoeSizeInput = screen.getAllByLabelText(/shoe size \/ person \d+/i)[0];
        fireEvent.change(shoeSizeInput, {target : {value: '42'}});
        expect(mockUpdateSize).toHaveBeenCalled();
    })
})