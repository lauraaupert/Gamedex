import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState} from "react";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";


const Signup=() => {
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const paperStyle={padding:20 ,width:300, margin:"0 auto",backgroundColor:"gray"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:"black"}
const btnStyle={backgroundColor:"black", color:"white"}
const marginTop={marginTop:10}
async function signup(e) {
  e.preventDefault();
  try {
   const signupData = {
     password,
     confirmPassword,
   };
   await axios.post("http://localhost:3000/api/users", signupData);
  }catch(err){
    console.error(err);
  }
}

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign up</h2>
          <Typography variant="caption" gutterbottom>
            Please fill this form to create an account
        </Typography>
        </Grid>
        <form onSubmit={signup}>
          <TextField fullWidth label="Name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>

          <FormControl component="fieldset" style={marginTop}>
          </FormControl>
          <TextField fullWidth label="Password" placeholder="Create Your Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <TextField fullWidth label="Confirm Password" placeholder="Confirm Your Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedA"
                color="#00801c"
              />
            }
            label="I accept terms and conditions"
          />
          <Button type="submit" style={btnStyle} varient="contained" >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  )

}

export default Signup;