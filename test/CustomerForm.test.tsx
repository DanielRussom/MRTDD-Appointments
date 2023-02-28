import React from "react";
import {
    initializeReactContainer,
    render,
    element,
    click,
} from "./reactTestExtensions";
import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    const blankCustomer = {
        firstName: "",
    };

    it("renders a form", () => {
        render(<CustomerForm original={blankCustomer} />);
        expect(element("form")).not.toBeNull();

    });

    it("renders the first name field as a text box", () => {
        render(<CustomerForm original={blankCustomer} />);
        const field = element("form").elements.firstName;
        expect(field).not.toBeNull();
        expect(field.tagName).toEqual("INPUT");
        expect(field.id).toEqual("firstName");
        expect(field.type).toEqual("text");
    });

    it("includes the existing value for the first name", () => {
        const customer = { firstName: "Ashley" };
        render(<CustomerForm original={customer} />);
        const field = element("form").elements.firstName;
        expect(field.value).toEqual("Ashley");
    })

    it("renders 'First name' as the first name label  content", () => {
        render(<CustomerForm original={blankCustomer} />);
        const label = element("label[for=firstName]");
        expect(label.textContent).toContain("First name");
    });

    it("renders a submit button", () => {
        render(<CustomerForm original={blankCustomer} />);
        const button = element("input[type=submit]");
        expect(button).not.toBeNull();
        expect(button.value).toEqual("Add");
       });

       it("saves existing first name when submitted", () => {
        // This means we're expecting some assertion to occur here 
        // In this case, it forces us to ensure the onSubmit function was called
        expect.hasAssertions(); 

        const customer = { firstName: "Ashley" };
        render(
         <CustomerForm
         original={customer}
         onSubmit={({ firstName }) =>
         expect(firstName).toEqual("Ashley")
         }
         />
         
        );
        const button = element("input[type=submit]");
        click(button);
       });
})