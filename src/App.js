import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// Importing React components for Routing Websites
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  const [Darkmode, setDarkmode] = useState('light');
  const [alert, setalert] = useState(null)
  const toggleMode = ()=>{
    if (Darkmode === 'light'){
      setDarkmode('dark')
      document.body.style.backgroundColor = 'rgba(var(--bs-dark-rgb)'
      document.body.style.color = 'white'
      document.title = 'TextUtils || Dark'
      ShowAlert("Dark Mode Enabled", "success")
    }
    else{
      setDarkmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title = 'TextUtils || Light'
      ShowAlert("Light Mode Enabled", "success")
    }
  }
  const ShowAlert = (message, type)=>{
    setalert({
      message : message,
      type : type
    })
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' mode={Darkmode} aboutarea='Get in Touch' toggleMode = {toggleMode}/>
      <div className="container"><Alert alert = {alert}/></div>
      <div className="container">
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<TextForm ShowAlert = {ShowAlert}/>}/>
      </Routes>
      </div>
      <div className="container">
          <footer className="py-3 my-4">
          <p className="text-center text-muted">© 2021 GetNxt. Inc</p>
          </footer>
      </div>
      </Router> 
     
    </>
  );  
}

export default App;
