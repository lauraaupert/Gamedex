import React, { useEffect, useState } from "react";
import SignInOutContainer from "../components/containers/index";

function Landing() {
    return(
        <SignInOutContainer />
    )
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