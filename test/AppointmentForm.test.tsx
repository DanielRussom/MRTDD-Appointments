import React from "react";
import {
    initializeReactContainer,
    render,
    field,
    form,
} from "./reactTestExtensions";
import { AppointmentForm } from "../src/AppointmentForm";

describe("AppointmentForm", () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders a form", () => {
        render(<AppointmentForm />);
        expect(form()).not.toBeNull();
    });

    describe("service field", () => {
        it("renders as a select box", () => {
            render(<AppointmentForm />);
            expect(field("service")).not.toBeNull();
            expect(field("service").tagName).toEqual("SELECT");
           });
    });
});