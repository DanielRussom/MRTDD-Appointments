import * as React from "react";

export const CustomerForm = ( { original } ) => (
<form>
    <label htmlFor="firstName">First name</label>
    <input 
        name="firstName" 
        value={original.firstName}
        readOnly
    />
</form>
);