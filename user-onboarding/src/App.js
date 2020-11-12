import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("name is required").min(1, "user needs to be 1 char min"),
  email: yup.string().required("email is required").min(5, "email must include proper symbol and domain, min 5 chars"),
  password: yup.string().required("password is required").min(6, "password must be at-least 6 characters long"),
  agree: yup.boolean().oneOf([true], "terms and conditions must be accepted to proceed"),
})

function App() {

const [form, setForm]=useState({
  name: "",
  email: "",
  password: "",
  agree: false,
})

const [disabled, setDisabled]=useState(true);

const change = event => {
  const { checked, value, name, type } = event.target
  const valueToUse=type==="checkbox" ? checked : value
  setForm({...form, [name]: valueToUse})
}

useEffect(function(item){
  schema.isValid(form).then(valid => setDisabled(!valid))
},[form])


  return (
    <div className="App">
      <form>

        <label htmlFor="name">Name:
          <input onChange={change} type="text" name="name" value={form.name} />
        </label>

        <label htmlFor="email">Email:
          <input onChange={change} type="email" name="email" value={form.email} />
        </label>

        <label htmlFor="password">Password:
          <input onChange={change} type="password" name="password" value={form.password} />
        </label>

        <label htmlFor="agree">
          <input onChange={change} type="checkbox" name="agree" checked={form.agree} />
        </label>

        <button type="submit" disabled={disabled}>Submit</button>
      </form>
    </div>
  )
}

export default App;
