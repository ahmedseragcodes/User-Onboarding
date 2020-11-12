import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import axios from "axios"

//setting up schema for validating inputs 

const schema = yup.object().shape({
  name: yup.string().required("name is required").min(1, "user needs to be 1 char min"),
  email: yup.string().required("email is required").min(5, "email must include proper symbol and domain, min 5 chars"),
  password: yup.string().required("password is required").min(6, "password must be at-least 6 characters long"),
  agree: yup.boolean().oneOf([true], "terms and conditions must be accepted to proceed"),
})

function App() {

  //state declarations 

const [form, setForm]=useState({
  name: "",
  email: "",
  password: "",
  agree: false,
})

//initial state of submit button, waits for schema validations to be true in a sense 
const [disabled, setDisabled]=useState(true);

//initial state of errors 

const [errors, setErrors]=useState({
  name: "",
  email: "",
  password: "",
  agree: ""
})

const setFormErrors= function(name, value){
  yup.reach(schema, name).validate(value)
  .then(function(){
    setErrors({...errors, [name]: ""})
  })
  .catch(function(err){
    setErrors({...errors, [name]: err.errors[0]})
  })
}
//setting up event handler for changes on inputs 
const change = event => {
  const { checked, value, name, type } = event.target
  const valueToUse=type==="checkbox" ? checked : value
  setFormErrors(name, valueToUse)
  setForm({...form, [name]: valueToUse})
}

//setting up onSubmit for form itself
const submit= event => {
  event.preventDefault()
  const newUser={ name: form.name.trim(), email: form.email, password: form.password, agree: form.agree  }
  axios.post("https://reqres.in/api/users", newUser)
  .then(function(res){
    setForm({ name: "", email: "", password: "", agree: false })
  })
  .catch(function(err){
    debugger
  })
}

//effect for checking if schema is valid and then changing disabled/enabled on submit button 
useEffect(function(item){
  schema.isValid(form).then(valid => setDisabled(!valid))
},[form])

//return for app component function 
  return (
    <div className="App">
      <div style={{ color: "red" }}>
      <div>{errors.name}</div>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <div>{errors.agree}</div>
      {/*closing div for style div, including error divs*/}
      </div>
      <form onSubmit={submit}>
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
