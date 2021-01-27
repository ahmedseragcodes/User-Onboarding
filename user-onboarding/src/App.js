import './App.css';
import React, { useState } from "react";
import Form from "./components/form";
import styled from "styled-components";

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

function App() {

  const [users, setUsers]=(initialUsers);
  const [formValues, setFormValues]=useState(initialFormValues);
  const [formErrors, setFormErrors]=useState(initialFormErrors);
  const [disabled, setDisabled]=useState(initialDisabled);


  return (
    <UserOnboarding>
      <Form values={formValues} setFormValues={setFormValues} errors={formErrors} users={users} setUsers={setUsers} disabled={disabled} setFormErrors={setFormErrors} setDisabled={setDisabled} initialFormValues={initialFormValues} />
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
