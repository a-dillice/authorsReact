import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import Button from '../components/Button';
import Form from '../components/Form';
import axios from 'axios'; 
import { navigate } from '@reach/router';


// Create component
const Create = (props) => {

    // setup form reset var
    const formReset = {
        name:""
    }

    // setup values from form inputs
    const [inputs, setInputs] = useState(formReset)

    // setup errors msgs
    const [errors, setErrors] = useState({});

    // setup success msgs
    const [success, setSuccess] = useState({});

    // user form submission
    const submitForm = (e) => {

        // prevent default submit
        e.preventDefault();
        
        // reset success msg
        setSuccess("");

        // test create
        axios({
            method:"post",
            url:"//localhost:8000/api/create",
            data:inputs   
        }).then((res)=>{

            // check for errors
            if(res.data.errors){
                
                //setup errors
                setErrors(res.data.errors);
            
            // success msg
            }else{
                
                // go back home on success
                navigate("/")

            }
        
        // check for general errors
        }).catch((err) => {
            
            // console msg
            console.log(err)

        })
 
    }

    // onChange update from form inputs
    const updateInputs = (e) => {

        // update inputs
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })

    }

    // go home button
    const home = (e) => {

        //prevent default
        e.preventDefault();

        // redirect to home
        navigate("/");

    }

    // return
    return (
        <div className={styles.wrapper}>
            <Button 
                label={"Home"} 
                look={"btn btn-info mb-3"} 
                callBack={(e)=>{home(e)}}
            />
            <Form 
                header={`Add a new author:`} 
                bttn={`Submit`}
                homeBttn={home} 
                submit={submitForm}
                field={updateInputs}
                success={success}
                errors={errors}
                values={inputs}
                build={{
                    "name":"text"
                }}/>
        </div>
    )

}

// export
export default Create;