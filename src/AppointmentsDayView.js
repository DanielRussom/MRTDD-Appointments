import React, { useState } from 'react';

const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const Appointment = ({ customer }) => (
    
    <table>
        <tr id='customer'>
            <td>{customer.firstName} {customer.surname}</td>
        </tr>
        <tr id='phoneNumber'>
            <td>{customer.phoneNumber}</td>
        </tr>
        <tr id='stylist'>
            <td>{customer.stylist}</td>
        </tr>
        <tr id='service'>
            <td>{customer.service}</td>
        </tr>
        <tr id='notes'>
            <td>{customer.notes}</td>
        </tr>
    </table>
);

export const AppointmentsDayView = ({ appointments }) => { 
const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(0);

    return (
    <div id="appointmentsDayView">
        <ol>
            {appointments.map((appointment, index) => (
                <li key={appointment.startsAt}>
                    <button 
                        type="button"
                        onClick={() => setSelectedAppointmentIndex(index)}
                        >
                        {appointmentTimeOfDay(appointment.startsAt)}
                    </button>
                </li>
            ))}
        </ol>
        { appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
        ) : (
            <Appointment {...appointments[selectedAppointmentIndex]} />
        )}
        
    </div>
)};