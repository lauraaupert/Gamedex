import React from "react";
import "./App.css";
import Wishlist from "./components/Wishlist";
import Navbar from "./components/NavBar";
import SignInOutContainer from "./components/containers";
import NoMatch from "./pages/noMatch";
import Landing from "./pages/landing"

// import VideoBg from "./components/VideoBg";

import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import WishlistPage from "./pages/wishlist";



function App() {
  return (
  <Router>
    
      
      <div className="App">
      <Switch>
      {/* <VideoBg /> */}

        <Route exact path="/">
    <Landing />
      
      </Route>
     
      <Route  exact path="/Wishlist">
      <WishlistPage />
      </Route>
      <Route>
            <NoMatch />
          </Route>
      
      </Switch>
      </div>
    </Router>
  );
}

export default App;
