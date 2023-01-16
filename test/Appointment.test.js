import React from 'react';
import { createRoot } from 'react-dom/client';
import { Appointment } from "../src/Appointment";
import {act} from 'react-dom/test-utils';

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: "Ashley" };
        const container = document.createElement('div');
        document.body.appendChild(container);
        const root = createRoot(container);

        act(() => root.render(<Appointment customer={customer} />));

        expect(container.textContent).toMatch('Ashley');
    });

    it('renders another customer first name', () => {
        const customer = { firstName: "Jordan" };
        const container = document.createElement('div');
        document.body.appendChild(container);
        const root = createRoot(container);

        act(() => root.render(<Appointment customer={customer} />));

        expect(container.textContent).toMatch('Jordan');
    });
});