import React from "react";
import { useEffect,useState } from "react"
import { useFetch } from "../../components/useFetch"
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from "@material-ui/core";
import Main from "../Main/main"
import { useDispatch } from "react-redux"
import { foodsData } from "../../store/item/item-action"

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
  
  const Pizza = () => {
    
  const dispatch = useDispatch()
  
  
  const APP_ID = "57e2140e"
  const APP_KEY = "8296dd333e28a28ed070e8554821dfeb";
  const resData = useFetch( `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`)
  
  const pizza = resData.more && resData.hits.map((item) => item.recipe);
  
  const [open, setOpen] = useState(false);
  
  function loadFunction() {
    return pizza ? setOpen(false) : setOpen(true)
  }
  
  
  
  useEffect(() => {
    loadFunction();
  } ,[pizza])
  
  

  const classes = useStyles();
  
  const handleClose =()=>{
    setOpen(false);
  }

  // dispatch(foodsData({pizza}))
        
  console.log("pizzadagi pizza",pizza)

  return (
      <div>
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
        <Main pizza={pizza} />
      </div>
      
  );
};

export default Pizza;