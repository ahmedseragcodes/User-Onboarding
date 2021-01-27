import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import Schema from "../validation/schema.js";



export default function Form(props){

    const { onSubmit, values, setFormValues, errors, setFormErrors, users, setUsers, disabled, setDisabled, initialFormValues }=props;

const onChange=function(event){
    const { value, type, name, checked }=event.target;

    const valueToUse=type==="checkbox" ? checked : value;

    setFormValues({...values, [name]: valueToUse})    
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