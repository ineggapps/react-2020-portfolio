import React from "react";
import styled from "styled-components";
import "./App.css";

const Test = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
`;

function App() {
  return (
    <div className="App">
      <Test>Hello, World</Test>
    </div>
  );
}

export default App;
