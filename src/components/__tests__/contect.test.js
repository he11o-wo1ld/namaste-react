import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases",() => {

    
    it("Should load contact us component", () => {
        render(<Contact/>);
        
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    });
    
    
    it("Should load button inside contact us component", () => {
        render(<Contact/>);
        
        const button = screen.getByRole("button");
        
        expect(button).toBeInTheDocument();
    });
    
    
    it("Should load text inside contact us component", () => {
        render(<Contact/>);
        
        const text = screen.getByText("Submit");
        
        expect(text).toBeInTheDocument();
    });
    
    it("Should load two input boxes on the contact component", () => {
        const contact = render(<Contact/>);
        
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox.length).toBe(2);
    });
    
});

