import React, { useState } from "react";
import Login from "./components/LoginComponents/Login";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import ListaUtentiComponent from "./components/ListaUtentiComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateUtenteComponent from "./components/CreateUtenteComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    
      <Router>
        {/*<HeaderComponent />*/}
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Login />} />
            <Route path="/utenti" element={<ListaUtentiComponent />} />
            {/*
            <Route
              path="/aggiungi-utente"
              element={<CreateUtenteComponent />}
            ></Route>
            */}
          </Routes>
        </div>
        
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
