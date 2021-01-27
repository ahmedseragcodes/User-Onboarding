import './App.css';
import axios from "axios";
import React, { useState } from "react";
import Form from "./components/form";
import styled from "styled-components";



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
    password: ""
  }
  const initialUsers=[];
  const initialDisabled=true;

  const [users, setUsers]=(initialUsers);
  const [formValues, setFormValues]=useState(initialFormValues);
  const [formErrors, setFormErrors]=useState(initialFormErrors);
  const [disabled, setDisabled]=useState(initialDisabled);

  const onSubmit=function(event, setUsers){
    event.preventDefault();

    const newFriend={
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        termsOfService: formValues.termsOfService
    }
    axios.post("https://reqres.in/api/", newFriend)
    .then(function(res){
        setUsers([...res.data, newFriend]);
        setFormValues(initialFormValues);
    })
    .catch(function(err){
        console.log(err);
    })
}

  return (
    <UserOnboarding>
      <h1>New Users</h1>
      <Form values={formValues} setFormValues={setFormValues} errors={formErrors} users={users} setUsers={setUsers} disabled={disabled} setFormErrors={setFormErrors} setDisabled={setDisabled} initialFormValues={initialFormValues} onSubmit={onSubmit} />
      {/* {users.map(function(user){
        return <p>{user.name}</p>
      })} */}
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
