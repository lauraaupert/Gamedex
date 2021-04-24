import React from "react";
import Games from "../games";

function Result({ game, handleSave }) {
  return (
    <div className="result container">
      <h3>Results</h3>
      <Games game={game} handleSave={handleSave} />
    </div>
  );
}

export default Result;
