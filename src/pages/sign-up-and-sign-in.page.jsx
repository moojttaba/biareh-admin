/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectSWitchSignUpSignIn } from "../redux/user/user.selectors";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
//import Hidden from "@material-ui/core/Hidden";
import SignIn from "../containers/sign-in.container";
import SignUp from "../containers/sign-up.container";
import signImage from "../assets/ungate-shipt-shopper.jpg";
// import SimpleHeader from '../layouts/header-simple.layout';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
  },
  gridItem: {
    minWidth: 500,
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  link: {
    fontSize: "1rem",
    color: "black",
    textDecoration: "none",
  },
}));
const SignInAndSignUpPage = ({ signUpTrue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      {/* <SimpleHeader/> */}
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
        alignItems="center"
        direction={matches ? "column" : "row"}
        spacing={9}
      >
        <Grid item className={classes.gridItem} xs={3}>
          <Grid container spacing={2} direction="column">
            <Grid item className={classes.link}>
              <Typography variant="h4" color="textSecondary">
                خوش امدید
              </Typography>
            </Grid>
            <Grid item className={classes.link}>
              <Typography variant="subtitle1" color="textSecondary">
                سریع تحویل بگیرید
              </Typography>
            </Grid>
            <Grid item className={classes.link}>
              <img src={signImage} alt="signImage" className={classes.img} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem} xs={3}>
          <Grid container spacing={2} direction="column">
            {signUpTrue ? <SignIn /> : <SignUp />}
          </Grid>
        </Grid>
      </Grid>
    
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  signUpTrue: selectSWitchSignUpSignIn,
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
