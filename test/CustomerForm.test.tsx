import React from "react";
import {
    initializeReactContainer,
    render,
    element,
    click,
    submit,
    change,
} from "./reactTestExtensions";
import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    const blankCustomer = {
        firstName: "",
    };

    const defaultForm = <CustomerForm original={blankCustomer} onSubmit={null} />

    it("renders a form", () => {
        render(defaultForm);
        expect(element("form")).not.toBeNull();

    });

    it("renders a submit button", () => {
        render(defaultForm);
        const button = element("input[type=submit]");
        expect(button).not.toBeNull();
        expect(button.value).toEqual("Add");
    });

    it("prevents the default action when submitting the form", () => {
        render(
            <CustomerForm
                original={blankCustomer}
                onSubmit={() => { }}
            />
        );
        const event = submit(element("form"));
        expect(event.defaultPrevented).toBe(true);
    });

    describe("first name field", () => {
        const itRendersAsATextBox = (fieldName) =>
        it("renders as a text box", () => {
            render(<CustomerForm original={blankCustomer} onSubmit={null} />);

            const field = element("form").elements[fieldName];
            
            expect(field).not.toBeNull();
            expect(field.tagName).toEqual("INPUT");
            expect(field.id).toEqual(fieldName);
            expect(field.type).toEqual("text");
        });

        itRendersAsATextBox("firstName");

        it("includes the existing value", () => {
            const customer = { firstName: "Ashley" };
            render(<CustomerForm original={customer} onSubmit={null} />);
            const field = element("form").elements.firstName;
            expect(field.value).toEqual("Ashley");
        })

        it("renders a label", () => {
            render(defaultForm);
            const label = element("label[for=firstName]");
            expect(label.textContent).toContain("First name");
        });

        it("saves existing value when submitted", () => {
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

        it("saves new value when submitted", () => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    original={blankCustomer}
                    onSubmit={({ firstName }) =>
                        expect(firstName).toEqual("Jamie")
                    }
                />
            );

            let field = element("form").elements.firstName;

            change(field, "Jamie");

            const button = element("input[type=submit]");

            click(button);
        })
    })
})