import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import Button from '../components/Button';
import Form from '../components/Form';
import axios from 'axios'; 
import { navigate } from '@reach/router';

// Update component
const Update = (props) => {

    // setup form reset var
    const formReset = {
        name:""
    }

    // get author name
    const [author, setAuthor] = useState({name:""});

    // setup values from form inputs
    const [inputs, setInputs] = useState(formReset)

    // setup errors msgs
    const [errors, setErrors] = useState({});

    // setup success msgs
    const [success, setSuccess] = useState({});

    // use hooks
    useEffect(() => {

        // fetch data
        axios({
            url:"//localhost:8000/api/"+ props.id,
            method:"get"

        // success
        }).then((res)=>{

            // update author name
            setAuthor({name:res.data.results.name});

            // set input to name
            setInputs({name:res.data.results.name})

        // catch errors
        }).catch((err)=>{
            console.log(err.resquest);
        });

    },[props.id])


    // user form submission
    const submitForm = (e) => {

        // prevent default submit
        e.preventDefault();
        
        // reset success msg
        setSuccess("");

        // test create
        axios({
            method:"put",
            url:"//localhost:8000/api/update/" + props.id,
            data:inputs   
        }).then((res)=>{

            // check for errors
            if(res.data.errors){
                
                //setup errors
                setErrors(res.data.errors);
            
            // success msg
            }else{
                
                // display success msg
                setSuccess(res.data);
                
                // reset errors
                setErrors({});

            }
        
        // check for general errors
        }).catch((err) => {
            
            // console msg
            console.log(err)

        })
 
    }

    // onChange update from form inputs
    const updateInputs = (e) => {

        // update inputs values
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })

        // update the author name
        setAuthor({
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
                header={`Edit this author`} 
                bttn={`Submit`}
                homeBttn={home} 
                submit={submitForm}
                field={updateInputs}
                success={success}
                errors={errors}
                values={author}
                build={{
                    "name":"text"
                }}/>
        </div>
    )

}

// export
export default Update;