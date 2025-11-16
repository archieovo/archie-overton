import React from "react";
import './App.css'
import Home from './components/Home';
import Header from './components/Header';
import Footer from "./components/Footer";
import "./index.css"

function App() {

  return (
      <div className="app-container">
          <Header />
          <Home/>
          <Footer />
      </div>
  )
}

export default App
