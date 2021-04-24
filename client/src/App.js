import React from "react";

import "./styles/App.css";

import NoMatch from "./pages/noMatch";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WishlistPage from "./pages/wishlist";
import LoginPage from "./pages/loginPage";
import VideoBg from "./components/VideoBg/index";

// axios.defaults.withCredentials = true;
function App() {
  return (
    <Router>
      <div className="App">
        <VideoBg />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/Wishlist">
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
