import React from "react";

function Find(props) {
  return (
    <div className="search container text-center">
      <h3>Choose your Book</h3>
      <div id="searchForm">
        <form>
          <input onChange={props.handleTyping} placeholder="Search"></input>
        </form>
        <button className="btn" id="searchBtn" onClick={props.handleSubmit}>
          Search!
        </button>
      </div>
      <br />
    </div>
  );
}

export default Find;
