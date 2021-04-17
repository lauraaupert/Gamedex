import { Grid, Paper, Avatar, TextField, Button, Typography, Link  } from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik, Form, Field} from "formik"
import * as Yup from "yup"

const Login = ({handleChange}) => {
  const paperStyle={padding :20,height:"61.5vh",width:300, margin:"0 auto"}
  const avatarStyle={backgroundColor:"#00801c"}
  const btnStyle={backgroundColor:"#00801c", margin: "8px 0"}
  const initialValues={
    username:"",
    password:"",
    remember:false
  }
  const validationSchema=Yup.object().shape({
    username:Yup.string("please enter valid email")
  })
  const onSubmit =(values, props)=>{
    console.log(values)
  }
  return(
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Login</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>
              {console.log(props)}
              <TextField label="Username" name="username" placeholder="Enter username" fullWidth required />
              <TextField label="Password" name="password" placeholder="Enter Password" type="password" fullWidth required />
              <Field as={FormControlLabel}
                name="remember"
                control={
                  <Checkbox
                    color="#00801c"
                  />
                }
                label="Remember me"
              />
              <Button type="submit" style={btnStyle} variant="contained" color="secondary" fullWidth>
                Login
        </Button>
            </Form>
          )}
        </Formik>
        <Typography >
          <Link href="#" >
            Forgot password ?
        </Link>
        </Typography>
        <Typography > Do you have an account ?
        <Link href="#" onClick={() => handleChange("event", 1)} >
            Sign up!
        </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;