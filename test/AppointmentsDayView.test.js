import React from 'react';
import { createRoot } from 'react-dom/client';
import { Appointment, AppointmentsDayView } from "../src/AppointmentsDayView";
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

describe('Appointment', () => {
    let container;
    let root;
    let customerAshley;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
        customerAshley =  { 
            firstName: "Ashley", 
            surname: "Surname", 
            phoneNumber: '123-456', 
            stylist: "Diana Bunn", 
            service: "Trim" };
    });

    const TableDataTextContent = (id) =>
        container.querySelector(`tr#${id} td`).textContent;

    it('renders a table', () => {
        act(() => root.render(<Appointment customer={customerAshley} />));

        expect(container.querySelector('table')).not.toBeNull();
    });

    it('renders the customers full name in the name field', () => {
        act(() => root.render(<Appointment customer={customerAshley} />));

        expect(TableDataTextContent('customer')).toEqual(`${customerAshley.firstName} ${customerAshley.surname}`);
    });

    it('renders another customer name', () => {
        const customer = { firstName: "Jordan", surname: "Personson" };

        act(() => root.render(<Appointment customer={customer} />));

        expect(TableDataTextContent('customer')).toEqual(`${customer.firstName} ${customer.surname}`);
    });

    it('renders the customer phone number', () => {
        act(() => root.render(<Appointment customer={customerAshley} />));

        expect(TableDataTextContent('phoneNumber')).toEqual(customerAshley.phoneNumber);
    });

    it('renders the stylist name', () => {
        act(() => root.render(<Appointment customer={customerAshley} />));

        expect(TableDataTextContent('stylist')).toEqual(customerAshley.stylist);
    });

    it('renders the salon service', () => {
        act(() => root.render(<Appointment customer={customerAshley} />));

        expect(TableDataTextContent('service')).toEqual(customerAshley.service);
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
        
        expect(container.textContent).toMatch("Ashley");
    });

    it('has a button element in each li', () => {
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));
        
        const expectedButtons = container.querySelectorAll('li > button');
        expect(expectedButtons).toHaveLength(2);
        expect(expectedButtons[0].type).toEqual('button');
    });

    it('renders another appointment when selected', () => {
        act(() => root.render(<AppointmentsDayView appointments={appointments} />));
        
        const button = container.querySelectorAll('button')[1];
        fireEvent.click(button);
        expect(container.textContent).toMatch('Jordan');
    });
});