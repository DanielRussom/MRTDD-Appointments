import * as React from "react";

const timeIncrements = (numTimes, startTime, increment) =>
    Array(numTimes)
        .fill([startTime])
        .reduce((acc, _, i) =>
            acc.concat([startTime + i * increment])
        );

const dailyTimeSlots = (salonOpensAt, salonClosesAt) => {
    const totalSlots =
        (salonClosesAt - salonOpensAt) * 2;
    const startTime = new Date()
        .setHours(salonOpensAt, 0, 0, 0);
    const increment = 30 * 60 * 1000;
    return timeIncrements(
        totalSlots,
        startTime,
        increment
    );
};

const toTimeValue = timestamp =>
    new Date(timestamp).toTimeString().substring(0, 5);

const TimeSlotTable = ({ salonOpensAt, salonClosesAt }) => {
    const timeSlots = dailyTimeSlots(
        salonOpensAt,
        salonClosesAt);
    return (
        <table id="time-slots">
            <tbody>
                {timeSlots.map(timeSlot => (
                    <tr key={timeSlot}>
                        <th>{toTimeValue(timeSlot)}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const AppointmentForm = ({ selectableServices, original,
    salonOpensAt,
    salonClosesAt }) => {
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
            <TimeSlotTable
                salonOpensAt={salonOpensAt}
                salonClosesAt={salonClosesAt} />
        </form>
    )
}

AppointmentForm.defaultProps = {
    salonOpensAt: 9,
    salonClosesAt: 19,
    selectableServices: [
        "Cut",
        "Blow-dry",
        "Cut & color",
        "Beard trim",
        "Cut & beard trim",
        "Extensions",
    ]
}