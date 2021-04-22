import { Grid, Paper, Avatar, TextField, Button, Typography, Link  } from "@material-ui/core";
import React, { useState } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
const Login = ({handleChange,}) => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const paperStyle={padding :20,height:"61.5vh",width:300, margin:"0 auto", borderRadius:"20px"}
  const avatarStyle={backgroundColor:"black"}
  const btnStyle={backgroundColor:"black", margin: "8px 0"}
  async function login(e) {
    e.preventDefault();
    try {
     const loginData = {
       name,
       password,
     };
     await axios.get("http://localhost:3000/auth/success", loginData);
    }catch(err){
      console.error(err);
    }
    
  }
  
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Login</h2>
        </Grid>

        <form onSubmit={login}>
          <TextField label="Username" name="username" placeholder="Enter username" fullWidth required onChange={(e) => setname(e.target.value)} value={name}/>
          <TextField label="Password" name="password" placeholder="Enter Password" type="password" fullWidth required onChange={(e) => setPassword(e.target.value)} value={password}/>
          <FormControlLabel
            name="remember"
            control={
              <Checkbox
                name="checkboxB"
                color="#00801c"
              />
            }
            label="Remember me"
          />
          
          <Button href="/Wishlist" type="submit" style={btnStyle} variant="contained" color="secondary" fullWidth >
            Login
        </Button>
        
      
        </form>


        <Typography >
          <Link href="#" >
            Forgot password?
        </Link>
        </Typography>
        <Typography > Do you have an account?
        <Link href="#" onClick={() => handleChange("event", 1)} >
            <br /> Sign up!
        </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;