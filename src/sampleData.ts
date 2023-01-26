const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);

export const sampleAppointments = [
    { startsAt: at(9), customer: {firstName: 'Charlie', surname: 'Bloggs', phoneNumber: '(+44) 142-4022' } },
    { startsAt: at(10), customer: {firstName: 'Frankie' } },
    { startsAt: at(11), customer: {firstName: 'Casey' } },
    { startsAt: at(12), customer: {firstName: 'Ashley' } },
    { startsAt: at(13), customer: {firstName: 'Jordan' } },
    { startsAt: at(14), customer: {firstName: 'Jay' } },
    { startsAt: at(15), customer: {firstName: 'Alex' } },
    { startsAt: at(16), customer: {firstName: 'Jules' } },
    { startsAt: at(17), customer: {firstName: 'Stevie' } },
];