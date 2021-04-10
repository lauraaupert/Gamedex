import React from "react";

import "./App.css";
import Wishlist from "./components/Wishlist/WishList";
import Navbar from "./components/Wishlist/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Wishlist />
    </div>
  );
}

export default App;
