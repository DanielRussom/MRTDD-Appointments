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
});