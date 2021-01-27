import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./components/form";
import styled from "styled-components";
import * as yup from "yup";
import Schema from "../src/validation/schema.js";
import schema from '../src/validation/schema.js';


function App() {

  const initialFormValues={
    name: "",
    email: "",
    password: "",
    termsOfService: false
  }
  
  const initialFormErrors={
    name: "",
    email: "",
    password: "",
    termsOfService: ""
  }
  const initialUsers=[];
  const initialDisabled=true;

  const [users, setUsers]=useState(initialUsers);
  const [formValues, setFormValues]=useState(initialFormValues);
  const [formErrors, setFormErrors]=useState(initialFormErrors);
  const [disabled, setDisabled]=useState(initialDisabled);

  const onSubmit=function(event){
    event.preventDefault();

    const newFriend={
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
    }
    
    //GETTING NETWORK ERROR WITH API BUT FUNCTIONALITY IS WORKING? 
    // axios.post("https://reqres.in/api/", newFriend)
    // .then(function(res){
    //     setUsers([...users, newFriend]);
    //     setFormValues(initialFormValues);
    // })
    // .catch(function(err){
    //     console.log(err);
    // })
        setUsers([...users, newFriend]);
        setFormValues(initialFormValues);
    
}

useEffect(function(){
  schema.isValid(formValues).then(function(valid){
    setDisabled(!valid);
  });
},[formValues])

  return (
    <UserOnboarding>
      <h1>New Users</h1>
      <Form values={formValues} setFormValues={setFormValues} errors={formErrors} users={users} setUsers={setUsers} disabled={disabled} setFormErrors={setFormErrors} setDisabled={setDisabled} initialFormValues={initialFormValues} onSubmit={onSubmit} />
      {users.map(function(user){
        return <p>{user.name}</p>
      })}
    </UserOnboarding>
  );
}

const UserOnboarding=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
`

export default App;
