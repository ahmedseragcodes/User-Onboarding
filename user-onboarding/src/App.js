import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {

const [form, setForm]=useState({
  name: "",
  email: "",
  password: "",
  agree: true,
})

const change = event => {
  const { checked, value, name, type } = event.target
  const valueToUse=type==="checkbox" ? checked : value
  setForm({...form, [name]: valueToUse})
}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
