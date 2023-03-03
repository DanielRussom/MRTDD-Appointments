import * as React from "react";


export const AppointmentForm = ({ selectableServices }) => {
    return (
        <form>
            <select name="service">
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