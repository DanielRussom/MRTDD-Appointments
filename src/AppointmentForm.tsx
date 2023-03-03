import * as React from "react";


export const AppointmentForm = ({ selectableServices, original }) => {
    return (
        <form>
            <select name="service"
                value={original.service}
                >
                <option />
                {selectableServices.map(s => (
                    <option key={s}>{s}</option>
                ))}
            </select>
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