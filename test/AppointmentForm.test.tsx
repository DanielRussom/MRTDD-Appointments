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

    const blankAppointment = {
        service: "",
       }

    const labelsOfAllOptions = (element) =>
        Array.from(
            element.childNodes,
            (node: any) => node.textContent
        );

    it("renders a form", () => {
        render(<AppointmentForm original={blankAppointment}/>);
        expect(form()).not.toBeNull();
    });

    const findOption = (selectBox, textContent) => {
        const options = Array.from(selectBox.childNodes);
        return options.find(
            (option: any) => option.textContent === textContent
        );
    };

    describe("service field", () => {
        it("renders as a select box", () => {
            render(<AppointmentForm original={blankAppointment}/>);
            expect(field("service")).not.toBeNull();
            expect(field("service").tagName).toEqual("SELECT");
        });
    });

    it("renders as a select box", () => {
        render(<AppointmentForm original={blankAppointment}/>);
        expect(field("service")).not.toBeNull();
        expect(field("service").tagName).toEqual("SELECT");
    });

    it("has a blank value as the first value", () => {
        render(<AppointmentForm original={blankAppointment}/>);
        const firstOption = field("service").childNodes[0];
        expect(firstOption.value).toEqual("");
    });

    it("lists all salon services", () => {
        const services = ["Cut", "Blow-dry"];

        render(<AppointmentForm selectableServices={services} original={blankAppointment}/>);

        expect(labelsOfAllOptions(field("service"))).toEqual(expect.arrayContaining(services));
    });

    it("pre-selects the existing value", () => {
        const services = ["Cut", "Blow-dry"];
        const appointment = { service: "Blow-dry" };
        render(
            <AppointmentForm
                selectableServices={services}
                original={appointment}
            />
        );
        const option : any = findOption(
            field("service"),
            "Blow-dry"
        );
        expect(option.selected).toBe(true);
    });
});