import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

// const initialFormValues={
//     name: "",
//     email: "",
//     password: "",
//     termsOfService: false
//   }


export default function Form(props){

    const { values, setFormValues, errors, setFormErrors, users, setUsers, disabled, setDisabled, initialFormValues }=props;

const onChange=function(event){
    const { value, type, name, checked }=event.target;

    const valueToUse=type==="checkbox" ? checked : value;

    setFormValues({...values, [name]: valueToUse})    
}

const onSubmit=function(event, setUsers){
    event.preventDefault();

    const newFriend={
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        termsOfService: values.termsOfService
    }
    axios.post("http://buddies.com/api/friends", newFriend)
    .then(function(res){
        setUsers([...res.data, newFriend]);
        setFormValues(initialFormValues);
    })
    .catch(function(err){
        console.log(err);
    })

}


    return (
        <form onSubmit={onSubmit} >
            <label htmlFor="name">Name:
                <input name="name" type="text" value={values.name} onChange={onChange} />
            </label>
            
            <label htmlFor="email">Email:
                <input name="email" type="email" value={values.email} onChange={onChange} />
            </label>

            <label htmlFor="password">Password:
                <input name="password" type="password" value={values.password} onChange={onChange} />
            </label>

            <label htmlFor="termsOfService">Terms Of Service:
                <input name="termsOfService" type="checkbox" checked={values.termsOfService} onChange={onChange} />
            </label>

            <button>Submit</button>

            
        </form>
    )
}