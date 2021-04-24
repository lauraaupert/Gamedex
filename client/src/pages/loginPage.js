import { Grid, Paper } from "@material-ui/core";
import React from "react";
import SignInOutContainer from "../components/containers/index";
 import "../components/Header.css";


function LoginPage() {

    return (
        <div className="login">
          <h1 className="title__app">GameDex</h1>
          <div >
            
            </div>
            <div className="loginPage__image">
            <SignInOutContainer />
           </div>
          </div>
        
    )
}

export default LoginPage;
