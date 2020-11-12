import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {

const [form, setForm]=useState({
  name: "",
  email: "",
  password: "",
})



  return (
    <div className="App">
      <form>
        <label htmlFor="name">Name:
          <input type="text" name="name" value={form.name} />
        </label>
        <label htmlFor="email">Email:
          <input type="email" name="email" value={form.email} />
        </label>
        <label htmlFor="password">Password:
          <input type="password" name="password" value={form.password} />
        </label>
        <label htmlFor="termsOfService">
          <input type="checkbox" name="termsOfService" checked={true} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
