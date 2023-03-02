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
        lastName: "",
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

    const itRendersAsATextBox = (fieldName) =>
        it("renders as a text box", () => {
            render(<CustomerForm original={blankCustomer} onSubmit={null} />);

            const field = element("form").elements[fieldName];

            expect(field).not.toBeNull();
            expect(field.tagName).toEqual("INPUT");
            expect(field.id).toEqual(fieldName);
            expect(field.type).toEqual("text");
        });

    const itIncludesTheExistingValue = (fieldName, existingValue) =>
        it("includes the existing value", () => {
            const customer = { [fieldName]: existingValue };
            render(<CustomerForm original={customer} onSubmit={null} />);

            const field = element("form").elements[fieldName];

            expect(field.value).toEqual(existingValue);
        })

    const itRendersALabel = (fieldName, expected) =>
        it("renders a label", () => {
            render(defaultForm);
            const label = element(`label[for=${fieldName}]`);
            expect(label.textContent).toContain(expected);
        });

    const itSubmitsExistingValue = (fieldName, value) =>
        it("saves existing value when submitted", () => {
            // This means we're expecting some assertion to occur here 
            // In this case, it forces us to ensure the onSubmit function was called
            expect.hasAssertions();

            const customer = { [fieldName]: value };
            render(
                <CustomerForm
                    original={customer}
                    onSubmit={(props) =>
                        expect(props[fieldName]).toEqual(value)
                    }
                />

            );
            const button = element("input[type=submit]");
            click(button);
        });

    const itSavesNewValue = (fieldName, newValue) =>
        it("saves new value when submitted", () => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    original={blankCustomer}
                    onSubmit={(props) =>
                        expect(props[fieldName]).toEqual(newValue)
                    }
                />
            );

            const field = element("form").elements[fieldName];
            change(field, newValue);

            const button = element("input[type=submit]");
            click(button);
        })


    describe("first name field", () => {

        itRendersAsATextBox("firstName");

        itIncludesTheExistingValue("firstName", "Ashley");

        itRendersALabel("firstName", "First name");

        itSubmitsExistingValue("firstName", "Ashley");

        itSavesNewValue("firstName", "Jamie");
    });

    describe("last name field", () => {
        itRendersAsATextBox("lastName");
    });
})