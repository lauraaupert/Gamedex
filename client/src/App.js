import React from "react";
import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";
import SignInOutContainer from "./components/containers";
import VideoBg from "./components/VideoBg";

function App() {
  return (
    <div>
      <div className="App">
      <VideoBg />
      <SignInOutContainer />
      </div>
      <Navbar />
      <Wishlist />
    </div>
  );
}

export default App;
