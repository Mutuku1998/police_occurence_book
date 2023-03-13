import React from "react";
import {Switch,Route, BrowserRouter,Link} from "react-router-dom"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Navbar from "./pages/Navbar";
import Administration from "./pages/Administration";
import Services from "./pages/Services";
import './App.css';
function App() { 
  return (
    
    <div className="header">
  
<hr/> 

  <BrowserRouter>
  <nav className="topnav">
    <ul>
  
    <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Administration">Administration</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </nav>
  <Switch>
  <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Navbar">
            <Navbar />
          </Route>
          <Route path="/Services">
            <Services/>
            </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Administration">
            <Administration/>
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          </Switch>
  </BrowserRouter>
    </div>
  );
}
export default App;