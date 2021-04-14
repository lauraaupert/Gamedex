import { Grid, Paper, Avatar, TextField, Button, Typography, Link  } from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = ({handleChange}) => {
  const paperStyle={padding :20,height:"68.4vh",width:300, margin:"0 auto"}
  const avatarStyle={backgroundColor:"#00801c"}
  const btnStyle={backgroundColor:"#00801c", margin: "8px 0"}
  return(
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
       <h2>Login</h2>
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
        <Button type="submit" style={btnStyle} variant="contained" color="secondary" fullWidth>
        Login 
        </Button>
        <Typography > 
        <Link href="#" >
          Forgot password ?
        </Link>
        </Typography>
        <Typography > Do you have an account ?
        <Link href="#" onClick={()=> handleChange("event", 1)} > 
           Sign up!
        </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;