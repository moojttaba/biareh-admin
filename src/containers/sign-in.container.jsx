import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import { CustomizedTextField } from "../components/custom-textField.component";


import { login } from "./../api/login";

import {
  googleSignInStart,
  emailSignInStart,
  switchSignUpSignIn,
} from "../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

const SignIN = ({
  emailSignInStart,
  googleSignInStart,
  switchSignUpSignIn,
}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // emailSignInStart(email, password);
    login(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column">
          {/* <Grid item>
            <Button
              type="button"
              //onClick={guessSignInStart}
              onClick={googleSignInStart}
              fullWidth={true}
              variant="contained"
              size="large"
              style={{ backgroundColor: "#3e82f7" }}
              color="primary"
            >
              ورود با گوگل
            </Button>
          </Grid>
          <Grid item>
            <Divider />
          </Grid> */}

          <Grid
            item
            container
            component="form"
            onSubmit={handleSubmit}
            spacing={4}
            direction="column"
          >
            <Grid item>
              <CustomizedTextField
                fullWidth={true}
                variant="outlined"
                className={classes.margin}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="ایمیل"
                required
              />
            </Grid>
            <Grid item>
              <CustomizedTextField
                fullWidth={true}
                variant="outlined"
                className={classes.margin}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="رمز عبور"
                required
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                fullWidth={true}
                size="large"
                color="secondary"
              >
                ورود
              </Button>
            </Grid>

            <Grid item container>
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Typography variant="body2" color="textSecondary" component="p">
                  آیا اکانت ندارید؟
                  <Button color="secondary" onClick={switchSignUpSignIn}>
                    ثبت نام
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  switchSignUpSignIn: () => dispatch(switchSignUpSignIn()),
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIN);
