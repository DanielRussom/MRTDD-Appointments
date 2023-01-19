import React from 'react';
import { createRoot } from 'react-dom/client';
import { Appointment, AppointmentsDayView } from "../src/Appointment";
import {act} from 'react-dom/test-utils';
import { render } from 'react-dom';

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
    let appointments;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);

        const today = new Date();
        appointments = [ 
            { 
                startsAt: today.setHours(12, 0),
                customer: { firstName: "Ashley"} 
            },
            { 
                startsAt: today.setHours(13, 0),
                customer: { firstName: "Jordan"} 
            }
        ]
    });

    it('renders a div with the expected id', () => {
        act(() => root.render(<AppointmentsDayView appointments={[]} />));

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointments in an ol element', () => {
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));

        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelector('ol').children).toHaveLength(2);
    });
    
    it('renders each appointment in an li', () => {
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));

        var expectedListItems = container.querySelectorAll('li');
        expect(expectedListItems).toHaveLength(2);
        expect(expectedListItems[0].textContent).toEqual("12:00")
        expect(expectedListItems[1].textContent).toEqual("13:00")
    });
    
    it('initially shows a message saying there are no appointments today', () => {
        act(() => root.render(<AppointmentsDayView appointments={[]} />));

        expect(container.textContent).toMatch("There are no appointments scheduled for today.");
    });
    
    it('selects the first appointment by default', () => {
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));
            
        console.log(appointments);
        console.log(...appointments);
        console.log(appointments[0]);
        expect(container.textContent).toMatch("Ashley");
    });

    it('has a button element in each li', () => {
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));
        
        const expectedButtons = container.querySelectorAll('li > button');
        expect(expectedButtons).toHaveLength(2);
        expect(expectedButtons[0].type).toEqual('button');
    });
});