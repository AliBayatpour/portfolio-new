import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Resume from "./pages/resume/resume";

function App() {
  return (
    <React.Fragment>
      <main>
        <Header />
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
