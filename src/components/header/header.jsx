import React, { useState } from "react";
import "./header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import SubStore from "../subStore/subStore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mr_2: {
    marginRight: theme.spacing(3),
  },
  storeIcon: {
    cursor: "pointer",
  },
}));

export default function Header() {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleShowSubStore = () => {
    setShow(!show);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "white" }}>
              News
            </Link>
          </Typography>
          <Button className={classes.mr_2} color="inherit" variant="outlined">
            Pizza
          </Button>
          <Button className={classes.mr_2} color="inherit" variant="outlined">
            Login
          </Button>
          <MenuItem>
            <IconButton
              onClick={handleShowSubStore}
              aria-label="show 11 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="secondary">
                <LocalGroceryStoreIcon className={classes.storeIcon} />
              </Badge>
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <div className={`subStore ${show ? "open" : ""}`}>
        <div className="subStore_card">
          <SubStore />
        </div>
      </div>
    </div>
  );
}
