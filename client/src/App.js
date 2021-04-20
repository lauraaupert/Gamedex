import React from "react";
import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/navbar/Navbar";
import SignInOutContainer from "./components/containers";
import VideoBg from "./components/VideoBg";
// import SearchBar from "./components/searchbar/searchbar"

function App() {
  return (
    <div>
      <div className="App">
      <Navbar />
      <VideoBg />
      <SignInOutContainer />
      {/* <SearchBar /> */}
      </div>
      <Wishlist />
    </div>
  );
}

export default App;
