import React from "react";
import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";
import SignInOutContainer from "./components/containers";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import VideoBg from "./components/VideoBg";
import HomePage from "./components/Home/Home";
import axios from "axios"

axios.defaults.withCredentials = true;
function App() {
  return (
  <Router>
    
      <Switch>
      <div className="App">
        <Route exact path="/">
      <VideoBg />
      <SignInOutContainer /> 
       </Route>
       <Route exact path="/Home">
      <VideoBg />
      <HomePage /> 
       </Route>
     
      <Route  exact path={["/Navbar","/Wishlist"]}>
      <Navbar />
      <VideoBg />
      <Wishlist />
      </Route>
      </div>
      </Switch>
    
    </Router>
  );
}

export default App;
