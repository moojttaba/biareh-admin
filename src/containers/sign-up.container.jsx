import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { switchSignUpSignIn, signUpStart } from "../redux/user/user.actions";
import { CustomizedTextField } from "../components/custom-textField.component";

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

const SignUp = ({ signUpStart, switchSignUpSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("passwords don't match");
      return;
    }

    signUpStart(name, email, password, passwordConfirm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column" justify="center">
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
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                label="نام کاربر"
                required
              />
            </Grid>
            <Grid item>
              <CustomizedTextField
                fullWidth={true}
                variant="outlined"
                className={classes.margin}
                type="text"
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
              <CustomizedTextField
                className={classes.margin}
                fullWidth={true}
                variant="outlined"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleChange}
                label="تایید رمز عبور"
                required
              />
            </Grid>

            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth={true}
                size="large"
              >
                ثبت نام
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
                  آیا اکانت دارید؟
                  <Button color="secondary" onClick={switchSignUpSignIn}>
                    ورود
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
  signUpStart: (name, email, password, passwordConfirm) =>
    dispatch(signUpStart({ name, email, password, passwordConfirm })),
});

export default connect(null, mapDispatchToProps)(SignUp);
