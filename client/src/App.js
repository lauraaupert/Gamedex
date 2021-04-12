import React from "react";

import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";

function App() {
  return (
    <div>
      <div className="App">
      <Login />
      <Signup />
      </div>
      <Navbar />
      <Wishlist />
    </div>
  );
}

export default App;
