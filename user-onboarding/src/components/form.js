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

const onSubmit=function(event){
    event.preventDefault();

    const newFriend={
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        termsOfService: values.termsOfService
    }

    axios.post("https://reqres.in/", newFriend)
    .then(function(res){
        setUsers([...users, newFriend]);
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
            <button>Submit</button>
        </form>
    )
}