import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
    padding: theme.spacing(6)
  },
  tabs: {
    marginRight: theme.spacing(5)
  },
 
  wrapper: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  tab:{
    borderBottom: `1px solid ${theme.palette.divider}`,
    minWidth: 300
  }
}));

const ProfilePage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        textColor="secondary"
      >
        <Tab
          icon={<AccountCircleOutlinedIcon/>}
          label="پروفایل"
          {...a11yProps(0)}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />

        <Tab
          icon={<RoomOutlinedIcon />}
          label="آدرس"
          {...a11yProps(1)}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />
        <Tab
          icon={<CreditCardOutlinedIcon />}
          label="اعتبار"
          {...a11yProps(2)}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />
        <Tab
          icon={<ViewListOutlinedIcon />}
          label="سفارش ها"
          {...a11yProps(3)}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />
        <Tab
          icon={<CardGiftcardOutlinedIcon />}
          label="باشگاه مشتریان"
          {...a11yProps(4)}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />
        <Tab
          icon={<ExitToAppOutlinedIcon />}
          label="خروج"
          {...a11yProps(5)}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </div>
  );
};

export default ProfilePage;
