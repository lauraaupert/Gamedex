import React from "react";
import SearchBar from "../components/searchbar/index";
import API from "../utils/API";
import "../components/Header.css";
// import GameTable from "../components/Table";

function Landing() {
  const about = "about us";
  API.searchTerms(about).then(function (result) {
    console.log(result);
  });
  return (
    // <h1>Matt's sexy landing page</h1>
    <SearchBar />
  );
  // return (
  //   <div className="search container text-center">
  //     <h3>Choose your Book</h3>
  //     <div id="searchForm">
  //       <form>
  //         <input onChange={props.handleTyping} placeholder="Search"></input>
  //       </form>
  //       <button className="btn" id="searchBtn" onClick={props.handleSubmit}>
  //         Search!
  //       </button>
  //     </div>
  //     <br />
  //   </div>
  // );
}

export default Landing;
