import React from 'react';
import { createRoot } from 'react-dom/client';
import { Appointment } from "../src/Appointment";
import {act} from 'react-dom/test-utils';

describe('Appointment', () => {
    let container;
    let root;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });

    it('renders the customer first name', () => {
        const customer = { firstName: "Ashley" };

        act(() => root.render(<Appointment customer={customer} />));

        expect(container.textContent).toMatch('Ashley');
    });

    it('renders another customer first name', () => {
        const customer = { firstName: "Jordan" };

        act(() => root.render(<Appointment customer={customer} />));

        expect(container.textContent).toMatch('Jordan');
    });
});