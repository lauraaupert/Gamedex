import React from "react";
import "./styles/App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";
import SignInOutContainer from "./components/containers";
import VideoBg from "./components/VideoBg";
// import { Switch } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <VideoBg />
      </div>
      <Switch>
        <Route exact path="/" component={SignInOutContainer} />
        <Route exact path="/Wishlist" component={Wishlist} />
        {/* <Route exact path="/" component={Saved} /> */}
      </Switch>
    </Router>
  );
}

export default App;
