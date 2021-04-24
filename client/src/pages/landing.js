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
}

export default Landing;

