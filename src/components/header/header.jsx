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
import { useRef } from "react"
import {  useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { userData } from "../../store/item/item-action";
// import { useEffect,useState } from "react"


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
  
  const [show, setShow] = useState(false);
  
  const handleShowSubStore = () => {
    setShow(!show);
  };
  
  //ref

  const Address=useRef();
  const TelNumber=useRef();
  const Name=useRef();
  const ExactAddres=useRef();
  const CardNumber=useRef();



    const [infoForum, setInfoForum] = useState({
        Address:"",
        TelNumber:"",
        Name:"",
        ExactAddres:"",
        CardNumber:"",
    });


    const dispatch = useDispatch()
    
    const handleUserData=(e)=>{
        e.preventDefault();
        setInfoForum((preveState) => ({
            ...preveState,
            Address: Address.current.value,
            TelNumber: TelNumber.current.value,
            Name: Name.current.value,
            ExactAddres: ExactAddres.current.value,
            CardNumber: CardNumber.current.value,
        }))
    }
    
    // console.log("infoForum ",infoForum)


    
    
  const {food} = useSelector((state) => state.cardData);
  const sum = food.map((item) => {return ( item.count)});
  const collected = sum.reduce((a, b) => a + b, 0)

  const countSum = food.map((item) => {return ( item.totalWeight)})
  const Count = countSum.reduce((a, b) => a + b, 0)

  const cost = food.map((item) => {return ( item.cost)})
  const toOrder = cost.reduce((a, b) => a + b, 0)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  



  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="static">
        <Toolbar>
            <div className="iconHeder">
              <img className="iconHederImg" src="https://www.flaticon.com/svg/vstatic/svg/766/766226.svg?token=exp=1618068075~hmac=b0c2dc81dd38531690ecea2fb8df2245" />
            </div>
          <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: "white", padding:"10px" }}>
                Pizza
              </Link>
          </Typography>
            <Link to="/food">
              <Button className={classes.mr_2} color="inherit" variant="outlined" >
                Food
              </Button>
            </Link>
            <Link to="/drink">
              <Button className={classes.mr_2} color="primary" variant="outlined"   >
                Drink
              </Button>
            </Link>
            <Link to="/">
              <Button className={classes.mr_2} color="inherit" variant="outlined"  >
                Pizza
              </Button>
            </Link>
              <Button className={classes.mr_2} color="inherit" variant="outlined">
                Login
              </Button>
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
        <div  className={`${open ? "modal_by" : "modal_byoff"}`}>
          <div className="modal_body">
            <div className="modal">
            <h1 style={{ color: "orange"}}>Ｏｒｄｅｒｉｎｇ</h1>
            
                <button className="offModalX" onClick={handleClose}>X</button>
              <form className="form">
                <h3 style={{color:"white"}}>To Whom and Where</h3>
               <label> <input name="Address" className="inputs" placeholder="Address" ref={Address} onChange={handleUserData}/></label>
              <label> <input name="TelNumber" className="inputs" placeholder="Tel Number" ref={TelNumber} onChange={handleUserData} /></label>
              <label> <input name="Name" className="inputs" placeholder="Name" ref={Name} onChange={handleUserData} /></label>
              <label> <input name="ExactAddres" className="inputs" placeholder="Exact Address" ref={ExactAddres} onChange={handleUserData} /></label>
                <h3 className="payH3">Pay: {new Intl.NumberFormat('en-US', {style: 'decimal'}).format(toOrder.toFixed(2)/10)} so'm </h3>
              <label><input name="CardNumber" className="inputs" placeholder="Card Number" ref={CardNumber} onChange={handleUserData}/></label>
              </form>
                <button className="sendBtn"  onClick={()=>  dispatch(userData({infoForum}))} > send ✔ </button>
            </div>
          </div>
        </div>
        <div className={`${show ? "SubStoreCard_on" : "SubStoreCard_off"}`}>
          <SubStore className={classes.SubStores} />
          <div className="Pay_page">
            <div className="Pay_box" onClick={handleOpen}>
              <span className="total">To Order</span> 👉
              <button className="pay_button">{new Intl.NumberFormat('en-US', {style: 'decimal'}).format(toOrder.toFixed(2)/10)} so'm</button>
            </div>  
          </div> 

        </div>
      </div>
    </div>
  );
}
