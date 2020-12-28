import { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MyTextField } from "./../components/custom-textField.component";

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

const ProductAddPage = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();

  const renderInput = ({ input, label, meta }) => {
    return (
      <Fragment>
        <MyTextField
          {...input}
          label={label}
          variant="outlined"
          fullWidth={true}
          helperText="Incorrect entry."
        />
      
      </Fragment>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Fragment>
      <Box
        className={classes.root}
        component="form"
        onSubmit={props.handleSubmit(onSubmit)}
      >
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
                  <Field
                    name="title"
                    component={renderInput}
                    label="enter title"
                  />
                </Box>
                <Box mt={2}>
                  <Field
                    name="description"
                    component={renderInput}
                    label="enter description"
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Button variant="contained" type="submit" color="primary">
          salam
        </Button>
      </Box>
    </Fragment>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "you must begozii";
  }

  if (!formValues.description) {
    errors.title = "you must berini";
  }
};

export default reduxForm({
  form: "productAddPage",
  validate,
})(ProductAddPage);
