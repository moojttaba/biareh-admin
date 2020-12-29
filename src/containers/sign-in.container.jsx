import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import { MyTextField } from "../components/form/custom-material-ui-form.styles";

import {
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

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <MyTextField
      label={label}
      placeholder={label}
      variant="outlined"
      error={touched && invalid}
      helperText={touched && error}
      {...custom}
      {...input}
    />
  );
};

const SignIN = ({
  emailSignInStart,

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
    emailSignInStart(email, password);
    //login(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column">
          <Grid
            item
            container
            component="form"
            onSubmit={handleSubmit}
            spacing={4}
            direction="column"
          >
            <Grid item>
              <MyTextField
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
              <MyTextField
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
                color="primary"
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
                  <Button color="primary" onClick={switchSignUpSignIn}>
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

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "you must begozii";
  }

  if (!formValues.password) {
    errors.password = "you must berini";
  }

  return errors;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  switchSignUpSignIn: () => dispatch(switchSignUpSignIn()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "SignInWithEmailAndPassword",
    validate,
  })(SignIN)
);
