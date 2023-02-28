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

    it("renders a form", () => {
        render(<CustomerForm />);
        expect(element("form")).not.toBeNull();

    });it("renders the first name field as a text box", () => {
        render(<CustomerForm />);
        const field = element("form").elements.firstName;
        expect(field).not.toBeNull();
        expect(field.tagName).toEqual("INPUT");
        expect(field.type).toEqual("text");
       });
})