import { Grid, Paper, Avatar, TextField, Button,  } from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login = () => {
  const paperStyle={padding :20,height:"70vh",width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:"#00801c"}
  const buttonStyle={backgroundColor:"#00801c"}
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
       <h2>Login in</h2>
       </Grid>
       <TextField label="Username" placeholder="Enter username" fullWidth required />
       <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
       <FormControlLabel
        control={
          <Checkbox 
            name="checkedB"
            color="#00801c"
          />
        }
        label="Remember me"
      />
        <Button type="submit" style={buttonStyle} variant="contained" color="secondary" fullWidth>
        Login in 
        </Button>
      </Paper>
    </Grid>
  )
}

export default Login;