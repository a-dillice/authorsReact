import React from 'react';
import {Link} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';

// form component
const Form = (props) => {

    // required setup props
    //submit - onSubmit >>> callback
    //field - onChange >> get values from input fields
    //value - pass the field value to the inputs value attribute
    //success - any success msgs
    //errors - any error msgs
    //build - an obj that builds input fields inside the form 
    // >>> current types: text, password, email, number and textarea
    const {header, bttn, homeBttn, submit, field, values, success, errors, build} = props;

    // return
    return(
        (values) ? 
        <form onSubmit={(e)=>{submit(e)}}>
            <h3>{header}</h3>
            {Object.entries(build).map(([key, value], i)=>{
                return(
                <div className="form-group" key={i}>
                    <label className={styles.formLabel} htmlFor={`${key}-input`}>{key}</label>
                    {(value.toLowerCase() === "textarea") ?
                    <textarea id={`${key}-input`} className="form-control" type={value} name={key} onChange={field}></textarea>: 
                    <input id={`${key}-input`} className="form-control" type={value} name={key} value={values[key]} onChange={field}/>}
                    <small className="text-danger">{(errors[key]) ? errors[key].message : ""}</small>
                </div>
                )
            })}
            <button className="btn btn-warning mr-2" type="submit" onClick={(e)=>{homeBttn(e)}}>Cancel</button>
            <button className="btn btn-primary" type="submit">{bttn}</button>
            <p className="text-success text-center m-3">{(success.success) ? success.success : ""}</p>
        </form> : <div><p className="text-danger">We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
        <Link className="btn btn-success" to="/new">Add Author</Link></div>
    )

}

// export
export default Form;