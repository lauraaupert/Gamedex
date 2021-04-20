import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Signup=() => {
const paperStyle={padding:20 ,width:300, margin:"0 auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:"#00801c"}
const btnStyle={backgroundColor:"#00801c", color:"white"}
const marginTop={marginTop:10}
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
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" />
          <TextField fullWidth label="Email" placeholder="Enter your Email" />

          <TextField fullWidth label="Password" placeholder="Create Your Password" />
          <TextField fullWidth label="Confirm Password" placeholder="Confirm Your Password" />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedA"
                color="#00801c"
              />
            }
            label="I accept terms and conditions"
          />
          <Button type="submit" style={btnStyle} varient="contained">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  )

}

export default Signup;