import React from 'react';
import { Appointment, AppointmentsDayView } from "../src/AppointmentsDayView";
import { fireEvent } from '@testing-library/react';
import { initializeReactContainer, render, container } from './reactTestExtensions';

describe('Appointment', () => {
    let customerAshley;
    let dummyAppointment;

    beforeEach(() => {
        initializeReactContainer();
        customerAshley = {
            firstName: "Ashley",
            surname: "Surname",
            phoneNumber: '123-456'
        };
        dummyAppointment = <Appointment customer={customerAshley} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={new Date} />
    });

    const TableDataElements = (id) =>
        container.querySelectorAll(`tr#${id} td`);

    it('renders a heading with the time', () => {
        const timestamp = new Date().setHours(9, 0, 0);

        render(<Appointment customer={customerAshley} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={timestamp} />);

        expect(container.querySelector('h3').textContent).toEqual(`Today's appointment at 09:00`);
    });

    it('renders a heading with another time', () => {
        const timestamp = new Date().setHours(10, 0, 0);

        render(<Appointment customer={customerAshley} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={timestamp} />);

        expect(container.querySelector('h3').textContent).toEqual(`Today's appointment at 10:00`);
    });

    it('renders a table', () => {
        render(dummyAppointment);

        expect(container.querySelector('table')).not.toBeNull();
    });

    it('renders the customers full name in the name field with a field title', () => {
        render(dummyAppointment);
        
        var actualElements = TableDataElements('customer');
        expect(actualElements[0].textContent).toEqual(`Customer`);
        expect(actualElements[1].textContent).toEqual(`${customerAshley.firstName} ${customerAshley.surname}`);
    });

    it('renders another customer name', () => {
        const customer = { firstName: "Jordan", surname: "Personson" };

        render(<Appointment customer={customer} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={new Date} />);

        expect(TableDataElements('customer')[1].textContent).toEqual(`${customer.firstName} ${customer.surname}`);
    });

    it('renders the customer phone number', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('phoneNumber');
        expect(actualElements[0].textContent).toEqual(`Phone number`);
        expect(actualElements[1].textContent).toEqual(customerAshley.phoneNumber);
    });

    it('renders the stylist name', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('stylist');
        expect(actualElements[0].textContent).toEqual(`Stylist`);
        expect(actualElements[1].textContent).toEqual("Hazel Bunn");
    });

    it('renders the salon service', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('service');
        expect(actualElements[0].textContent).toEqual(`Service`);
        expect(actualElements[1].textContent).toEqual("Trim");
    });

    it('renders the notes', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('notes');
        expect(actualElements[0].textContent).toEqual(`Notes`);
        expect(actualElements[1].textContent).toEqual("Lorem Ipsum");
    });
});

describe('AppointmentsDayView', () => {
    let appointments;

    beforeEach(() => {
        initializeReactContainer();

        const today = new Date();
        appointments = [
            {
                startsAt: today.setHours(12, 0),
                customer: { firstName: "Ashley" }
            },
            {
                startsAt: today.setHours(13, 0),
                customer: { firstName: "Jordan" }
            }
        ]
    });

    it('renders a div with the expected id', () => {
        render(<AppointmentsDayView appointments={[]} />);

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointments in an ol element', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelector('ol').children).toHaveLength(2);
    });

    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        var expectedListItems = container.querySelectorAll('li');
        expect(expectedListItems).toHaveLength(2);
        expect(expectedListItems[0].textContent).toEqual("12:00")
        expect(expectedListItems[1].textContent).toEqual("13:00")
    });

    it('initially shows a message saying there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]} />);

        expect(container.textContent).toMatch("There are no appointments scheduled for today.");
    });

    it('selects the first appointment by default', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.textContent).toMatch("Ashley");
    });

    it('has a button element in each li', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        const expectedButtons = container.querySelectorAll('li > button');
        expect(expectedButtons).toHaveLength(2);
        expect(expectedButtons[0].type).toEqual('button');
    });

    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        const button = container.querySelectorAll('button')[1];
        fireEvent.click(button);
        expect(container.textContent).toMatch('Jordan');
    });
});