import React,{useState } from "react";
import "./header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import SubStore from "../subStore/subStore";
import {  useSelector } from "react-redux"
import { useDispatch } from "react-redux";



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
    border:"1px solid white",
    color: "white"
  },
  storeIcon: {
    cursor: "pointer",
  },
  
  color:{
    backgroundColor:"orange",
  },
  
  SubStores:{
    border:"none"
    
  }
}));


export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch()  
  
  const [show, setShow] = useState(false);
  
  const handleShowSubStore = () => {
    setShow(!show);
  };
    
  const {food} = useSelector((state) => state.cardData);
  const sum = food.map((item) => {return ( item.count)});
  const collected = sum.reduce((a, b) => a + b, 0)


  const cost = food.map((item) => {return ( item.cost)})
  const toOrder = cost.reduce((a, b) => a + b, 0)



  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="static">
        <Toolbar>
            <div className="iconHeder">
              <img className="iconHederImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Icon_Essen.svg/1200px-Icon_Essen.svg.png" />
            </div>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "white", padding:"10px" }}>
                Pizza
              </Link>
          </Typography>
            
            <Link to="/food">
              <Button className={classes.mr_2} color="primary" variant="outlined"   >
                Food
              </Button>
            </Link>
            <Link to="/cake" >
              <Button className={classes.mr_2} color="primary" variant="outlined"   >
                Cake
              </Button>
            </Link>
            <Link to="/drink" >
              <Button className={classes.mr_2} color="primary" variant="outlined"   >
                Drink
              </Button>
            </Link>
            <Link to="/" >
              <Button className={classes.mr_2} color="inherit" variant="outlined"  >
                Pizza
              </Button>
            </Link>
            <Link>
            <Link to="/login">
              <Button className={classes.mr_2} color="inherit" variant="outlined">
                Login
              </Button>
            </Link>  
            </Link>  
            <MenuItem>
              <IconButton
                onClick={handleShowSubStore}
                aria-label="show 11 new notifications"
                color="inherit"
                >
                <Badge badgeContent={collected} color="secondary">
                  <LocalGroceryStoreIcon className={classes.storeIcon} />
                </Badge>
              </IconButton>
            </MenuItem>
        </Toolbar>
      </AppBar>
      <div className="SubStore">
        <div className={`${show ? "SubStoreCard_on" : "SubStoreCard_off"}`}>
          <SubStore className={classes.SubStores} />
          <Link to="/goToStore">
            <div className="Pay_page">
              <div className="Pay_box">
                <span className="total">To Order</span> 👉
                <button className="pay_button">{new Intl.NumberFormat('en-US', {style: 'decimal'}).format(toOrder.toFixed(2)/10)} so'm</button>
              </div>  
            </div> 
          </Link>
        </div>
      </div>
    </div>
  );
}
