import React from "react";
import SearchBar from "../components/searchbar";
import API from "../utils/API";
// import GameTable from "../components/Table";

function Landing(props) {
  // const userInput = "";
  // API.searchTerms(userInput).then(function (result) {
  //   console.log(result);
  // // });
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

// 'use strict';

// import React, {Component} from 'react';

// class Example extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
//         }
//     }

//     render () {
//         return (
//             <video id="background-video" loop autoPlay>
//                 <source src={this.state.videoURL} type="video/mp4" />
//                 <source src={this.state.videoURL} type="video/ogg" />
//                 Your browser does not support the video tag.
//             </video>
//         )
//     }
// };

// export default Example;
