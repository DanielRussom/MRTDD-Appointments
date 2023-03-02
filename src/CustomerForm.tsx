import * as React from "react";
import { useState } from "react";

export const CustomerForm = ({ original, onSubmit }) => {

    const [customer, setCustomer] = useState(original);

    const handleChange = ({ target }) => {
        setCustomer((customer) => ({
                ...customer,
                [target.name]: target.value
            }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(customer);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
                id="firstName"
                name="firstName"
                value={original.firstName}
                onChange={handleChange}
            />
            
            <label htmlFor="lastName">Last name</label>
            <input
                id="lastName"
                name="lastName"
                value={original.lastName}
                onChange={handleChange}
            />
            
            <label htmlFor="phoneNumber">Phone number</label>
            <input
                id="phoneNumber"
                name="phoneNumber"
                value={original.phoneNumber}
                onChange={handleChange}
            />

            <input type="submit" value="Add" />
        </form>
    );
};