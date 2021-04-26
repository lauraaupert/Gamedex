import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import passport from "../../utils/passport"
import "../../components/Header.css";

const Login = ({ handleChange, setIsAuthenticatedUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const paperStyle = { padding: 20, height: "62vh", width: 300, margin: "0 auto", borderRadius: "20px" }
  const avatarStyle = { backgroundColor: "black" }
  const btnStyle = { backgroundColor: "black" }

  function login(e) {
    e.preventDefault();
    console.log("Username and password are", username, password)

    passport.LogIn(username, password).then(res => {
      if (res.status === 200) {
        setIsAuthenticatedUser(true)
      }
    })
  }


  return (
    <Grid>
      <Paper className="image" elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>

        <form onSubmit={login}>
          <TextField
            label="Username" name="username" placeholder="Enter username" fullWidth required onChange={(e) => setUsername(e.target.value)} value={username} />
          <TextField
            label="Password" name="password" placeholder="Enter Password" type="password" fullWidth required onChange={(e) => setPassword(e.target.value)} value={password} />
          <FormControlLabel
            name="remember"
            control={<Checkbox name="checkboxB" color="#00801c" />}
            label="Remember me"
          />

          <Button
            onClick={login}
            type="submit"
            style={btnStyle}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Login
          </Button>
        </form>

        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            <br /> Sign up!
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
