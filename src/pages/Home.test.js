import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

test("The default button color is red", ()=>{
    render(<Home/>)
    const buttonElement = screen.getByRole("button", {name: "Change to Midnight Blue"})
    expect(buttonElement).toHaveStyle({backgroundColor: 'MediumVioletRed'})
})

describe("button", () => {
    it("contains a red button, that turns blue after clicking", () => {
        render(<Home/>)
        const button = screen.getByTestId("Carl")
        expect(button).toHaveStyle({backgroundColor: "MediumVioletRed"})

        //click button
        fireEvent.click(button)

        expect(button).toHaveStyle({backgroundColor: "MidnightBlue"})
        expect(button).toHaveTextContent("Change to Medium Violet Red") // same but uses custom toHaveTextContent jest-dom matcher
    });
});

describe("checkbox", () => {
    it("contains an unchecked checkbox by default", () => {
        render(<Home />)
        const checkbox = screen.getByLabelText("Disable Button")
        //disable button
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
    });

    it("disables the button after checkbox is clicked", () => {
        render(<Home />)
        const button = screen.getByRole("button", {name: "Change to Midnight Blue"})
        const checkbox = screen.getByLabelText("Disable Button")
        expect(button).toBeEnabled()
        //disable button
        fireEvent.click(checkbox)
        expect(button).toBeDisabled()
    })
    it("greys the button after checkbox is checked, and turns red again after recheck", () => {
        render(<Home/>)
        const button = screen.getByRole("button")
        const checkbox = screen.getByRole("checkbox")
        //disable button
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({backgroundColor:"grey"})
        //re-anable button
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({backgroundColor:"MediumVioletRed"})
    })
    it("greys the button after checkbox is checked, and turns blue after recheck", () => {
        render(<Home/>)
        const button = screen.getByRole("button")
        const checkbox = screen.getByRole("checkbox")
        //click button to change button color
        fireEvent.click(button)
        //disable button
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({backgroundColor:"grey"})
        //re-enable button
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({backgroundColor:"MidnightBlue"})
    })
});
