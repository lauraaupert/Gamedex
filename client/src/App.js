import React from "react";
import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";
import SignInOutContainer from "./components/containers";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <SignInOutContainer />
      </div>

      <Wishlist />
    </div>
  );
}

export default App;
