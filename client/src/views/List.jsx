import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import Button from '../components/Button';
import axios from 'axios'; 

// List component
const List = (props) => {

    // set author name list
    const [authors, setAuthors] = useState([""])

    // use hook
    useEffect(() =>{

        // fetch data
        axios({
            url:"//localhost:8000/api",
            method:"get"
        // success
        }).then((res) =>{

            // set author list
            setAuthors(res.data.results);
        
        // catch errors
        }).catch((err)=>{
            // console msg
            console.log(err.response);
        })

    },[]);


    // on edit click
    const editClick = (e, id) => {
        
        // prevent default
        e.preventDefault();

        // redirect to edit page with author id
        navigate("/edit/" + id)

    }

    // on delete click
    const deleteClick = (e, id) => {
        
        // prevent default
        e.preventDefault();

        // delete author 
        axios({
            url:"//localhost:8000/api/destroy/" + id,
            method:"delete"
        }).then(() => {
            
            // update authors list minus the one we just deleted
            setAuthors(Object.values(authors).filter((author) => author._id !== id))

        // catch errors
        }).catch((err)=>{
            console.log(err.request)
        })

    }

    // return
    return(
        <div className={styles.wrapper}>
            <Button label={"Add an author"} look={"btn btn-success mb-4"} callBack={(e)=>{navigate("/new")}} />
            <h3>We have quotes by:</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col" colSpan="2">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    { (Object.entries(authors).length > 0) ?
                        Object.entries(authors).map(([key, item], i)=>{
                            return(
                                <tr key={i}>
                                    <td className="col-6">{item.name}</td>
                                    <td className="col-3">
                                        <Button label={"Edit"} 
                                        look={"btn btn-info w-100"} 
                                        callBack={(e)=>{editClick(e, item._id);}} />
                                    </td>
                                    <td className="col-3">
                                        <Button label={"Delete"} 
                                        look={"btn btn-danger w-100"} 
                                        callBack={(e)=>{deleteClick(e, item._id);}} />
                                    </td>
                                </tr>
                            )
                        }) : <tr><td className='text-danger' colSpan="2">No Authors Found.</td></tr>

                    }
                </tbody>
            </table>
        </div>
    )
    
}

// export
export default List;