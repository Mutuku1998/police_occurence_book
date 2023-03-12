import React from "react";
import {Switch,Route, BrowserRouter,Link} from "react-router-dom"
import Aboutus from "./components/Aboutus";
import contactus from "./components/contactus";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Administration from "./components/Administration";
import services from "./components/services";
import './App.css';
function App() { 
  return (
    
    <div className="header">
  
<hr/> 

  <BrowserRouter>
  <nav className="topnav">
    <ul>
  
    <li><Link to="/">Home</Link></li>
            <li><Link to="/Aboutus">About us</Link></li>
            <li><Link to="/Administration">Administration</Link></li>
            <li><Link to="/services">services</Link></li>
            <li><Link to="/contactus">contact us</Link></li>
    </ul>
  </nav>
  <Switch>
  <Route path="/Aboutus">
            <Aboutus/>
          </Route>
          <Route path="/Navbar">
            <Navbar />
          </Route>
          <Route path="/Administration">
            <Administration/>
            </Route>
          <Route path="/services">
            <services/>
          </Route>
          <Route path="/contactus">
            <contactus/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          </Switch>
  </BrowserRouter>
    </div>
  );
}
export default App;
