import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import schema from "../validation/schema.js";



export default function Form(props){

    const { onSubmit, values, setFormValues, errors, setFormErrors, users, setUsers, disabled, setDisabled, initialFormValues }=props;

const onChange=function(event){

    yup
    .reach(schema, event.target.name)
    .validate(event.target.value)
    .then(function(){
        setFormErrors({
            ...errors,
            [event.target.name]: "",
        })
    })
    .catch(function(err){
        setFormErrors({
            ...errors,
            [event.target.name]: err.errors[0],
        })
    })


    //original handle change functionality 

    const { value, type, name, checked }=event.target;

    const valueToUse=type==="checkbox" ? checked : value;

    setFormValues({...values, [name]: valueToUse})    
}



    return (
        <div>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
            </div>
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

            <button id="submitBtn" disabled={disabled}>Submit</button>

            
        </form>
        </div>
    )
}