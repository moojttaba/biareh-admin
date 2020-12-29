import { Fragment } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { renderTextField } from "./../components/form/material-ui.form";
import { fetchPosts } from "../redux/API/API.actions";
import { createStructuredSelector } from "reselect";

import {
  emailSignInStart,
  switchSignUpSignIn,
} from "../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    minWidth: 400,
  },
}));

const SignIN = ({
  emailSignInStart,
  switchSignUpSignIn,
  handleSubmit,
  history,
}) => {
  const classes = useStyles();

  const onSubmit = ({email,password}) => {
    emailSignInStart(email, password,() => {
      // history.push("/");
    } );
    // history.push("/");
    //console.log(values);
  };

  return (
    <Fragment>
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
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Field
                type="password"
                name="password"
                label="رمز عبور"
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
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
    </Fragment>
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

//////////////// REDUX MANAGER

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  switchSignUpSignIn: () => dispatch(switchSignUpSignIn()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default reduxForm({
  validate,
  form: "SignInWithEmailAndPassword",
})(connect(mapStateToProps, mapDispatchToProps)(SignIN));
