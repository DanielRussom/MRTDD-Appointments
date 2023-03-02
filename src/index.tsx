import * as React from "react";
import { createRoot } from 'react-dom/client';
import { AppointmentsDayView } from './AppointmentsDayView';
import { CustomerForm } from "./CustomerForm";
import { sampleAppointments } from './sampleData';

const blankCustomer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
};
const root = createRoot(document.getElementById('root')!);
root.render(<CustomerForm original={blankCustomer} onSubmit={null}/>)
//root.render(<AppointmentsDayView appointments={sampleAppointments} />);