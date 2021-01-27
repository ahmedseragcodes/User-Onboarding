import './App.css';
import React, { useState } from "react";
import Form from "./components/form";
import styled from "styled-components";

function App() {
  return (
    <UserOnboarding>
      <Form />
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
