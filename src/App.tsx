import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <div className=" app">
      < Sidebar/>
      <main className="app__content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<h2>Analytics Page</h2>} />
          <Route path="/settings" element={<h2>Settings Page</h2>} />
        </Routes>
      </main>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
