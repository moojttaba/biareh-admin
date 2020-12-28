import { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import InputBase from "@material-ui/core/InputBase";
// import {
//   CustomizedTextField,
//   BootstrapInput,
// } from "./../components/custom-textField.component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      paddingRight: 240,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      //flexDirection: "row",
    },
  },
  Container: {
    marginTop: 24,
    maxWidth: 700,
    margin: "auto",
    [theme.breakpoints.up("md")]: {},
  },

  footer: {
    [theme.breakpoints.up("md")]: {
      minWidth: `calc(100% - 240px)`,
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
}));

const ProductAddPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();

  const renderInput = (formProps) => {
    return (
      <InputBase
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  };

  return (
    <Fragment>
      <Box className={classes.root} component="form">
        <Box width={matches ? "60%" : "90%"} mb={2.4} flexDirection="column">
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="نام کالا"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box mt={2}>
                  <Field name="title" component={renderInput} />
                </Box>
                <Box mt={2}>
                  <Field name="description" component={renderInput} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default reduxForm({
  form: "productAddPage",
})(ProductAddPage);
