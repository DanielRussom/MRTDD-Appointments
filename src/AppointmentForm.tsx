import * as React from "react";

const TimeSlotTable = () => <table id="time-slots" />;

export const AppointmentForm = ({ selectableServices, original }) => {
    return (
        <form>
            <select name="service"
                value={original.service}
                readOnly
                >
                <option />
                {selectableServices.map(s => (
                    <option key={s}>{s}</option>
                ))}
            </select>
            <TimeSlotTable />
        </form>
    )
}

AppointmentForm.defaultProps = {
    selectableServices: [
    "Cut",
    "Blow-dry",
    "Cut & color",
    "Beard trim",
    "Cut & beard trim",
    "Extensions",
    ]
   }