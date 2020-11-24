import "bulma/css/bulma.css";
import React from "react";
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

function Signup () {
    return (
        <div>
         
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Passowrd" type="passowrd" placeholder="***********" />
            <CoolButton myClass="button is-info" type="submit">submit</CoolButton>
        </div>
    )
}

export default Signup;