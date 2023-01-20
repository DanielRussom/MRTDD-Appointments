import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppointmentsDayView } from './Appointment';
import { sampleAppointments } from './sampleData';

const root = createRoot(document.getElementById('root'));
root.render(<AppointmentsDayView appointments={sampleAppointments} />);