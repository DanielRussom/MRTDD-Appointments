import * as React from "react";
import { useState } from "react";

export const CustomerForm = ({ original, onSubmit }) => {

    const [customer, setCustomer] = useState(original);

    const handleChangeFirstName = ({ target }) => {
        setCustomer((customer) => ({
                ...customer,
                firstName: target.value
            }))
    }

    const handleChangeLastName = ({ target }) => {
        setCustomer((customer) => ({
                ...customer,
                lastName: target.value
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
                onChange={handleChangeFirstName}
            />
            
            <label htmlFor="lastName">Last name</label>
            <input
                id="lastName"
                name="lastName"
                value={original.lastName}
                onChange={handleChangeLastName}
            />

            <input type="submit" value="Add" />
        </form>
    );
};