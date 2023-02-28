import * as React from "react";

export const CustomerForm = ( { original } ) => (<form>
    <input name="firstName" value={original.firstName}/>
</form>
);