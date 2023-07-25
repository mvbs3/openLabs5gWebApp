import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import BodyHome from "./Components/BodyHome";
import BodyDeploy5gSA from "./Components/BodyDeploy5gSA";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<BodyHome />}></Route>
        <Route path="/Deploy5gSa" element={<BodyDeploy5gSA />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
