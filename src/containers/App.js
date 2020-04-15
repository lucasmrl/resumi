import React from "react";
import Left from "../components/Left/Left";
import Right from "../components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";

function App() {
  return (
    <div className="app">
      <ResumeContextProvider>
        <Left />
        <Right />
      </ResumeContextProvider>
    </div>
  );
}

export default App;
