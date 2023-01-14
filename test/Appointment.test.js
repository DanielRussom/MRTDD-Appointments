import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Appointment } from "../src/Appointment";

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: "Ashley" };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        // const root = createRoot(container);
        // root.render(component);

        ReactDOM.render(component, container);

        console.log("AAAAAAAAAA");
        console.log(document.body.textContent);

        expect(document.body.textContent).toMatch('Ashley');
    });
});