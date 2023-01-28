const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);

export const sampleAppointments = [
    {
        startsAt: at(9), 
        customer: {
            firstName: 'Charlie', 
            surname: 'Bloggs', 
            phoneNumber: '(+44) 142-4023'
        },
        stylist: "Rhiannon Bunn",
        service: "Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(10), 
        customer: {
            firstName: 'Frankie',
            surname: "Surname",
            phoneNumber: '(+44) 133-456'
        },
        stylist: "Hazel Bunn",
        service: "Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(11), 
        customer: {
            firstName: 'Casey',
            surname: "Personson",
            phoneNumber: '(+44) 443-456'
        },
        stylist: "Hazel Bunn",
        service: "Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(12), 
        customer: {
            firstName: "Ashley",
            surname: "Surname",
            phoneNumber: '(+44) 443-756'
        },
        stylist: "Hazel Bunn",
        service: "Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(13), 
        customer: {
            firstName: 'Jordan',
            surname: "Personson",
            phoneNumber: '(+44) 143-456'
        },
        stylist: "Rhiannon Bunn",
        service: "Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(14), 
        customer: {
            firstName: 'Jay',
            surname: "Surname",
            phoneNumber: '(+44) 443-486'
        },
        stylist: "Rhiannon Bunn",
        service: "Something that isn't a Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(15), 
        customer: {
            firstName: 'Alex',
            surname: "Surname",
            phoneNumber: '(+44) 443-412'
        },
        stylist: "Hazel Bunn",
        service: "Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(16), 
        customer: {
            firstName: 'Jules',
            surname: "Spurtame",
            phoneNumber: '(+44) 443-455'
        },
        stylist: "Hazel Bunn",
        service: "Beard Trim",
        notes: "Lorem Ipsum"
    },
    {
        startsAt: at(17), 
        customer: {
            firstName: 'Stevie',
            surname: "Spurtame",
            phoneNumber: '123-456'
        },
        stylist: "Gurt",
        service: "Trim",
        notes: "What kind of name is Spurtname lmao."
    },
];