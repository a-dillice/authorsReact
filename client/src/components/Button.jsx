import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// reuseable button component
const Button = (props) =>{

    // required props
    // label - sets the text for the button
    // look - add any bootstrap like classes
    // callBack - the function you want to fire when you click the button
    const {label, look, callBack} = props;

    // return button tag
    return <button type="button" className={(look !== "") ? look : ""} onClick={(e)=>{callBack(e)}}>{label}</button>

} 

// export
export default Button