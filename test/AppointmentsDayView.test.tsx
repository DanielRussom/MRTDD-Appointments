import React from 'react';
import { Appointment, AppointmentsDayView } from "../src/AppointmentsDayView";
import {
    initializeReactContainer,
    render, 
    container,
    click, 
    element, 
    elements, 
    textOf, 
    typesOf
} from './reactTestExtensions';

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
        elements(`tr#${id} td`);

    it('renders a heading with the time', () => {
        const timestamp = new Date().setHours(9, 0, 0);

        render(<Appointment customer={customerAshley} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={timestamp} />);

        expect(element('h3').textContent).toEqual(`Today's appointment at 09:00`);
    });

    it('renders a heading with another time', () => {
        const timestamp = new Date().setHours(10, 0, 0);

        render(<Appointment customer={customerAshley} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={timestamp} />);

        expect(element('h3').textContent).toEqual(`Today's appointment at 10:00`);
    });

    it('renders a table', () => {
        let selector: string = 'table';
        render(dummyAppointment);

        expect(element(selector)).not.toBeNull();
    });

    it('renders the customers full name in the name field with a field title', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('customer');
        const expectedCustomerName = `${customerAshley.firstName} ${customerAshley.surname}`;
        expect(textOf(actualElements)).toEqual(["Customer", expectedCustomerName])
    });

    it('renders another customer name', () => {
        const customer = { firstName: "Jordan", surname: "Personson" };

        render(<Appointment customer={customer} stylist="Hazel Bunn" service="Trim" notes="Lorem Ipsum" startsAt={new Date} />);

        const secondCustomer = textOf(TableDataElements('customer'))[1];
        expect(secondCustomer).toEqual(`${customer.firstName} ${customer.surname}`);
    });

    it('renders the customer phone number', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('phoneNumber');
        expect(textOf(actualElements)).toEqual(["Phone number", customerAshley.phoneNumber])
    });

    it('renders the stylist name', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('stylist');
        expect(textOf(actualElements)).toEqual(["Stylist", "Hazel Bunn"])
    });

    it('renders the salon service', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('service');
        expect(textOf(actualElements)).toEqual(["Service", "Trim"])
    });

    it('renders the notes', () => {
        render(dummyAppointment);

        var actualElements = TableDataElements('notes');
        expect(textOf(actualElements)).toEqual(["Notes", "Lorem Ipsum"])
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

        expect(element('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointments in an ol element', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        expect(element('ol')).not.toBeNull();
        expect(element('ol').children).toHaveLength(2);
    });

    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        expect(textOf(elements("li"))).toEqual(["12:00", "13:00"])
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

        expect(typesOf(elements("li > *"))).toEqual(["button", "button"]);
    });

    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments} />);
        const secondButton = elements('button')[1];

        click(secondButton);

        expect(container.textContent).toMatch('Jordan');
    });
});