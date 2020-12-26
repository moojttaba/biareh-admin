import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";

export const CustomizedTextField = withStyles((theme) => ({
  root: {
    "& ": {
      //height: "56px",

      "& label": {
        width: "100%",
        textAlign: "right",
        paddingRight: "20px",
        color: "rgb(117, 117, 117)",

        fontSize: "16px",
        left: "100%",
        transform: "translate(-100%, 18px)",
        transformOrigin: "top right",
        //transform: "translate(0, 14px) scale(1)",
      },
      "& .MuiSelect-root:focus": {
        display: "none",
      },

      "& .MuiInputLabel-shrink": {
        paddingRight: "8px",
        transform: "translate(-100%, 5px) scale(0.80)",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        color: "#00897b",
      },

      "& .MuiInputBase-root": {
        border: "solid 1px rgba(0, 0, 0, 0.23)",
        borderRadius: 4,

        "& input": {
          color: "rgb(66, 66, 66)",
          fontSize: "16px",
          padding: "25px 8px 8px",
          //height: "56px",
          //boxSizing: 'border-box'
          zIndex: 1,

          "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
            backgroundColor: "none",
          },
        },
        "& .MuiSelect-iconOutlined": {
          right: 5,
          position: "static",
          paddingLeft: 6,
        },
        "& .MuiSelect-outlined.MuiSelect-outlined": {
          paddingRight: 20,
        },

        "& fieldset": {
          border: "none",

          //height: 20,

          // "&::focus": {

          //   outline: 1,
          // },
          "& legend": {
            "& span": {
              display: "none",
            },
          },
        },
      },
    },
  },
}))(TextField);

export const BootstrapInput = withStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {},

    "label + &": {
      width: "100%",
      textAlign: "right",
      color: "rgb(117, 117, 117)",
      fontSize: "16px",
      transformOrigin: "right",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      height: 34,
    },
    "& .MuiSelect-icon": {
      right: `calc(100% - ${theme.spacing(4)}px)`,
    },
  },
  input: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    height: 0,
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "solid 1px rgba(0, 0, 0, 0.23)",
    fontSize: 16,
    padding: "8px 30px 10px 40px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
