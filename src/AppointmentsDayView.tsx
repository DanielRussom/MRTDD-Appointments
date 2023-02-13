import * as React from "react";
import { useState } from 'react';

const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const Appointment = ({ customer, stylist, service, notes, startsAt }) => (
    
    <div>
        <h3>Today's appointment at {appointmentTimeOfDay(startsAt)}</h3>

        <table>
            <tbody>
                <tr id='customer'>
                    <td>Customer</td>
                    <td>{customer.firstName} {customer.surname}</td>
                </tr>
                <tr id='phoneNumber'>
                    <td>Phone number</td>
                    <td>{customer.phoneNumber}</td>
                </tr>
                <tr id='stylist'>
                    <td>Stylist</td>
                    <td>{stylist}</td>
                </tr>
                <tr id='service'>
                    <td>Service</td>
                    <td>{service}</td>
                </tr>
                <tr id='notes'>
                    <td>Notes</td>
                    <td>{notes}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const AppointmentsDayView = ({ appointments }) => { 
const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(0);

    return (
    <div id="appointmentsDayView">
        <ol>
            {appointments.map((appointment, index) => (
                <li key={appointment.startsAt}>
                    <button 
                        className="bg-blue-500"
                        type="button"
                        onClick={() => setSelectedAppointmentIndex(index)}
                        >
                        {appointmentTimeOfDay(appointment.startsAt)}
                    </button>
                </li>
            ))}
        </ol>
        { appointments.length === 0 ? (
        <p className="text-lg font-light text-red-800">There are no appointments scheduled for today.</p>
        ) : (
            <Appointment {...appointments[selectedAppointmentIndex]} />
        )}
        
    </div>
)};