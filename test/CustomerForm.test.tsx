import React from "react";
import {
    initializeReactContainer,
    render,
    element,
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
        expect(field.type).toEqual("text");
    });

    it("includes the existing value for the first name", () => {
        const customer = { firstName: "Ashley" };
        render(<CustomerForm original={customer} />);
        const field = element("form").elements.firstName;
        expect(field.value).toEqual("Ashley");
    })

    it("renders a label for the first name field", () => {
        render(<CustomerForm original={blankCustomer} />);
        const label = element("label[for=firstName]");
        expect(label).not.toBeNull();
    });

    it("renders 'First name' as the first name label  content", () => {
        render(<CustomerForm original={blankCustomer} />);
        const label = element("label[for=firstName]");
        expect(label.textContent).toContain("First name");
    });
})