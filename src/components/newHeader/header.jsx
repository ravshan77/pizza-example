import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import { Link, NavLink } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import {  useSelector } from "react-redux";
import "./NewHeader.css"
import "../subStore/subStore.css"
import SubStore from "../subStore/subStore"

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';




const useStyles = makeStyles((theme) => ({

  AppBar:{
    backgroundColor:"white",
    boxShadow:"none",
    display:"flex",
    // backgroundColor:"red"
  },

  toolbar:{
    width:"90%",
    margin:"0 auto",
    paddingLeft:"0",
    paddingRight:"0",
    // backgroundColor:"red",
    display:"flex",
    justifyContent:"space-between"
  },

  grow: {
    flexGrow: 1,
    zIndex:"10"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color:"black",
    fontSize:"100%",
    fontFamily:"Helvet",
    marginLeft:"1%",
    marginRight:"3%",
    marginTop:"1%",
    marginBottom:"1%",
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffcd38",
    display:"flex",
    marginRight: theme.spacing(2),
    width:"25%"
  },
  searchIcon: {
    position: 'absolute',
    width:"100%",
    pointerEvents: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"white"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "7%",
    transition: theme.transitions.create('width'),
    color:"white",
    backgroundColor: "#ffcd38",
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mr_2: {
    marginRight: theme.spacing(3),
    padding: "0", 
    fontFamily:"cursive",
  },
  accountIcon:{
    color:"orange",
  },
  storeIcon:{
    color:"orange",
  },
  selected:{
    color:"orange",
  },

  dodoIcon:{
    width:"5%",
    margin:"0px",
    padding:"0px",
  },

  link:{
    display:"flex",
    alignItems:"center"
  }

}));

const NewHeader = () => {
  const classes = useStyles();

  const {food} = useSelector((state) => state.cardData);
  const sum = food.map((item) => {return ( item.count)});
  const collected = sum.reduce((a, b) => a + b, 0)
  
  const orderCost = food.map((item) => {return ( item.cost)})
  const toOrder = orderCost.reduce((a, b) => a + b, 0)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [cost, setCost] = React.useState("");
  const [auth, setAuth] = React.useState(true);
  const open = Boolean(anchorEl);
  
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const handleShowSubStore = () => {
  }; 
  
  const handleMouseMove=() => {
    setShow(!show);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChangeCost = (event) => {
    setCost(() => event.target.value);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <AppBar position="relative" className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <img src="https://media.rabota.ru/processor/logo/original/2021/02/24/dodopiccabrjansk-4702e87c16eb4cb532a4591e05d85b21.png" className={classes.dodoIcon} />
            <Typography className={classes.title}  >
              <h1 className="Pizza-title">DoDo PizzA</h1>
              <p className="Pizza-info">very tasty pizzas</p>                  
          </Typography>
          
          <Typography className={classes.title} variant="h6" noWrap>
              <h3 className="dostafki-text">Dostafka pizza <span className="red-text">Karshi</span></h3>
              <p className="Pizza-info">33 min • 4.17 ⭐</p>
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              <h4 className="Pizza-info opacity">The call is free</h4>
              <h3 className="dostafki-text">1168</h3>
            </Typography>
            
            
            <div>
              <MenuItem>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
                className={classes.accountIcon}
              >
                <AccountCircle />
              </IconButton>
              </MenuItem>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>   
        </Toolbar>
      </AppBar>
      <hr></hr>
      <div className="bottom-header">
        <div className="subStores">
          <div style={{display: 'flex'}}>
             <NavLink to="/"   activeClassName="activeClass" exact >
                <Button className={classes.mr_2} variant="text" >
                  Pizza
                </Button>
              </NavLink>
              <NavLink to="/food" activeClassName="activeClass" >
                <Button className={classes.mr_2} >
                  Food
                </Button>
             </NavLink>
              <NavLink to="/drink" activeClassName="activeClass" >
                <Button className={classes.mr_2} >
                  Drink
                </Button>
             </NavLink>
             <NavLink to="/drink" activeClassName="activeClass" >
                <Button className={classes.mr_2} >
                  Accont
                </Button>
             </NavLink>
             <NavLink to="/drink" activeClassName="activeClass" >
                <Button className={classes.mr_2} >
                  Contact us
                </Button>
             </NavLink>
            {/* <div className={classes.search}>
            <div>
              <InputBase
              placeholder="Cost search" 
              backgroundColor= "#ffcd38"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChangeCost}
                value={cost}
                id="demo-customized-textbox"
                />
                </div>
                <Link to={`/filteredByCost/${cost}`} className={classes.link}>
                <Button variant="text">
                <div className={classes.searchIcon}>
                <SearchIcon />
                 </div>
                 </Button>
              </Link>
            </div> */}
          </div>
            <MenuItem onMouseOver={handleMouseMove}>
              <IconButton
              onClick={handleShowSubStore}
              aria-label="show 11 new notifications"
              color="inherit"
              >
                <Badge badgeContent={collected} color={classes.badge}>
                  <LocalGroceryStoreIcon className={classes.storeIcon} />
                </Badge>
              </IconButton>
            </MenuItem>
        </div>
      </div>
      <hr></hr>
      <div className="store-blok">
        <div className={`${show ? "subStoreCard-on" : "subStoreCard-off" }`}>
          {collected > 0 ?
           <div className="store">
             <div className="order-text">
               <p className="price">Order price: </p>
               <p className="price">{new Intl.NumberFormat('en-US', {style: 'decimal'}).format(toOrder.toFixed(2)/10)} so'm</p>
             </div>
             <hr></hr>
                <SubStore />
           </div>

          : <div className="empty-store">
            <h1 style={{textAlign: 'center'}}>Empty</h1>
            <div className="empt-imges">
              <img className="empty-img" src="https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BE%D0%BA-%D0%B2-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B5-41349310.jpg" />
            </div>
            </div>}
        </div>
      </div>
    </div>
  );
}


export default NewHeader;

{/* <div className={classes.grow} /> */}





{/* {renderMobileMenu} */}




// search block
     










// bottom header kasha

{/* <NavLink to="/" activeClassName="activeClass" exact >
       <Button className={classes.mr_2} variant="text" >
       Pizza
       </Button>
       </NavLink>
       <NavLink to="/food" activeClassName="activeClass" >
       <Button className={classes.mr_2} >
       Food
       </Button>
       </NavLink>
       <NavLink to="/drink" activeClassName="activeClass" >
       <Button className={classes.mr_2} >
       Drink
       </Button>
      </NavLink> */}
      {/* <div className={classes.grow} /> */}
      {/* Descktop header */}
      {/* <div className={classes.sectionDesktop}> */}
      {/* <MenuItem>
        <IconButton
        onClick={handleShowSubStore}
        aria-label="show 11 new notifications"
       color="inherit"
       >
       <Badge badgeContent={collected} color={classes.badge}>
       <LocalGroceryStoreIcon className={classes.storeIcon} />
       </Badge>
       </IconButton>
      </MenuItem> */}
     {/* <MenuItem>
     <IconButton
     edge="end"
     aria-label="account of current user"
     aria-controls={menuId}
     aria-haspopup="true"
     onClick={handleProfileMenuOpen}
     color="inherit"
     >
     <AccountCircle className={classes.accountIcon} />
     </IconButton>
     </MenuItem> */}
     {/* </div> */}
     {/* Descktop header */}
     
     {/* Moble header */}
     {/* <div className={classes.sectionMobile}>
     <IconButton
     aria-label="show more"
     aria-controls={mobileMenuId}
     aria-haspopup="true"
     onClick={handleMobileMenuOpen}
     color="inherit"
     >
     <MoreIcon />
     </IconButton>
     
     
     
     
     
     
     
     
     
     
     
     
     // mobile bar
     
     
     // const menuId = 'primary-search-account-menu';
     // const renderMenu = (
     //   <Menu
     //     anchorEl={anchorEl}
     //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
     //     id={menuId}
     //     keepMounted
     //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     //     open={isMenuOpen}
     //     onClose={handleMenuClose}
     //   >
     //     {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
     //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
     //     <MenuItem onClick={handleMenuClose}>o nas</MenuItem>
     //     <MenuItem onClick={handleMenuClose}>contsct us</MenuItem> */}
     //   </Menu>
     // );
     
     // const mobileMenuId = 'primary-search-account-menu-mobile';
     // const renderMobileMenu = (
     //   <Menu
     //     anchorEl={mobileMoreAnchorEl}
     //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
     //     id={mobileMenuId}
     //     keepMounted
     //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     //     open={isMobileMenuOpen}
     //     onClose={handleMobileMenuClose}
     //   >
     //     <MenuItem>
     //       <IconButton
     //         onClick={handleShowSubStore}
     //         aria-label="show 11 new notifications"
     //         color="inherit"
     //         >
     //         <Badge badgeContent={collected} color={classes.badge}>
     //           <LocalGroceryStoreIcon />
     //         </Badge>
     //       </IconButton>
     //       <p>Store</p>
     //     </MenuItem>
     //     <MenuItem>
     //       <IconButton aria-label="show 4 new mails" color="inherit">
     //         <Badge badgeContent="11" color="secondary">
     //           <MailIcon />
     //         </Badge>
     //       </IconButton>
     //       <p>Messages</p>
     //     </MenuItem>
     //     <MenuItem>
     //       <IconButton aria-label="show 11 new notifications" color="inherit">
     //         <Badge badgeContent={11} color="secondary">
     //           <NotificationsIcon />
     //         </Badge>
     //       </IconButton>
     //       <p>Notifications</p>
     //     </MenuItem>
     //     <MenuItem onClick={handleProfileMenuOpen}>
     //       <IconButton
     //         aria-label="account of current user"
     //         aria-controls="primary-search-account-menu"
     //         aria-haspopup="true"
     //         color="inherit"
     //       >
     //         <AccountCircle />
     //       </IconButton>
     //       <p>Profile</p>
     //     </MenuItem>
     //   </Menu>
     // );
    //  </div> */}