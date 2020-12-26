import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ProfileDashboard from "../containers/profile-dashboard.container";

const useStyles = makeStyles((theme) => ({
  Header: {
    backgroundColor: theme.palette.background.paper
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.Header} variant='h3' align='center'>پروفایل</Typography>
      <ProfileDashboard />
    </React.Fragment>
  );
};

export default ProfilePage;
