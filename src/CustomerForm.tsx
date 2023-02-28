import * as React from "react";

export const CustomerForm = ( { original } ) => (
<form>
    <label htmlFor="firstName">First name</label>
    <input 
        id="firstName"
        name="firstName" 
        value={original.firstName}
        readOnly
    />

    <input type="submit" value="Add" />
</form>
);