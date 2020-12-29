import { useState } from "react";
import { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { MyTextField } from "../components/form/custom-textField.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUserProfile,
  selectUserProfileToken,
} from "./../redux/user/user.selectors";
import { updateSettings } from "./../api/axios.utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 1000,

    [theme.breakpoints.up("md")]: {
      paddingRight: 240,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      //flexDirection: "row",
    },
  },

  footer: {
    [theme.breakpoints.up("md")]: {
      //minWidth: `calc(100% - 240px)`,
      width: "100%",
    },
    width: "100%",
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#120e1f",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },

  CardHeaderTitle: {
    fontSize: 20,
  },
  action: {
    alignSelf: "center",
  },
}));

const ProfilePage = ({ user, token }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const classes = useStyles();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const { name, email, photo } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // updateSettings(userData)
    updateSettings(userData, token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleClick = () => {};

  console.log(photo);

  return (
    <Fragment>
      <Box className={classes.root} component="form" onSubmit={handleSubmit}>
        <Box
          width={matches ? "60%" : "90%"}
          mb={2.4}
          flexDirection="column"
          flexGrow={1}
        >
          {/*//////////////////TITLE///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                classes={{ action: classes.action }}
                avatar={
                  <Avatar alt={user.name} src={`img/users/${user.photo}`} />
                }
                action={
                  <Fragment>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: 10 }}
                      onClick={handleClick}
                    >
                      اپلود عکس
                    </Button>
                    <Button variant="outlined" color="secondary">
                      حذف عکس
                    </Button>
                  </Fragment>
                }
              />
              <Divider />

              <CardContent>
                <Box
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                  mt={2}
                >
                  <Box width="50%" ml={2}>
                    <MyTextField
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      label="نام"
                      placeholder={user.name}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box width="50%" mr={2}>
                    <MyTextField
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="lastName"
                      //value={lastName}
                      onChange={handleChange}
                      label="نام خانوادگی"
                      //placeholder={lastName}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                >
                  <Box width="50%" ml={2}>
                    <MyTextField
                      fullWidth={true}
                      variant="outlined"
                      type="file"
                      accept="image/*"
                      name="photo"
                      value={photo}
                      onChange={handleChange}
                      label="عکس"
                      //placeholder={mobail}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // required
                    />
                  </Box>
                  <Box width="50%" mr={2}>
                    <MyTextField
                      fullWidth={true}
                      variant="outlined"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      label="ایمیل"
                      placeholder={user.email}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // required
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/*/////////// FOOTER //////////////*/}
        </Box>
        <Box className={classes.footer} mt={3}>
          <Box mr={2}>
            <Typography variant="subtitle2" color="primary" align="center">
              کالا ذخیره نشده است
            </Typography>
          </Box>
          <Box flexDirection="row" display="flex">
            <Box ml={2}>
              <Button variant="contained" color="primary">
                ذخیره نشود
              </Button>
            </Box>
            <Box ml={2}>
              <Button variant="contained" color="secondary" type="submit">
                ذخیره شود
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUserProfile,
  token: selectUserProfileToken,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
