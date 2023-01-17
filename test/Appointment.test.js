import React from 'react';
import { createRoot } from 'react-dom/client';
import { Appointment, AppointmentsDayView } from "../src/Appointment";
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

describe('AppointmentsDayView', () => {
    let container;
    let root;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });

    it('renders a div with the expected id', () => {
        act(() => root.render(<AppointmentsDayView appointments={[]} />));

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointments in an ol element', () => {
        const today = new Date();
        const appointments = [ 
            { startsAt: today.setHours(12, 0) },
            { startsAt: today.setHours(13, 0) }
        ]
        
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));

        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelector('ol').children).toHaveLength(2);
    });
    
    it('renders each appointment in an li', () => {
        const today = new Date();
        const appointments = [ 
            { startsAt: today.setHours(12, 0) },
            { startsAt: today.setHours(13, 0) }
        ]
        
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));

        var expectedListItems = container.querySelectorAll('li');
        expect(expectedListItems).toHaveLength(2);
        expect(expectedListItems[0].textContent).toEqual("12:00")
        expect(expectedListItems[1].textContent).toEqual("13:00")
    });
});