import React from "react";

import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";
import SignInOutContainer from "./components/containers";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";



function App() {
  return (
  <Router>
    
      <Switch>
      <div className="App">
        <Route exact path="/">
      <SignInOutContainer />
      </Route>
     
      <Route  exact path={["/Navbar","/Wishlist"]}>
      <Navbar />
      <Wishlist />
      </Route>
      </div>
      </Switch>
    
    </Router>
  );
}

export default App;
