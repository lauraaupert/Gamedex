import React from "react";
import Navbar from "../components/NavBar/index.js";
function NoMatch() {
  return (
    <div>
      <Navbar />
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  );
}

export default NoMatch;
