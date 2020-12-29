import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MyTextField } from "../components/form/custom-material-ui-form.styles";

import { fetchPosts } from "../redux/API/API.actions";

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

const SignIN = ({
  emailSignInStart,
  switchSignUpSignIn,
  handleSubmit,
  fetchPosts,
  meta,
}) => {
  const classes = useStyles();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setUserCredentials({ ...userCredentials, [name]: value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   //emailSignInStart(email, password);
  //   //login(email, password);
  // };

  const onSubmit = (formValues) => {
    //emailSignInStart(email, password);
    //   //login(email, password);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column">
          <Grid
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            item
            container
            spacing={4}
            direction="column"
          >
            <Grid item>
              <Field
                name="email"
                type="email"
                label="ایمیل"
                required
                value={email}
                component={MyTextField}
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Field
                type="password"
                name="password"
                value={password}
                label="رمز عبور"
                required
                component={MyTextField}
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button
                //type="submit"
                variant="contained"
                fullWidth={true}
                size="large"
                color="primary"
                onClick={fetchPosts}
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
  fetchPosts: () => dispatch(fetchPosts()),
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
