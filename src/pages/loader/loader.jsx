import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector} from "react-redux"
import { foodsData } from "../../store/item/item-action"

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
 
const Loader = ({pizza}) => {

    // const {foods} = useSelector((state) => state.cardData);

    const classes = useStyles();
    const dispatch =  useDispatch()

    const [open, setOpen] = useState(false);
  
  function loadFunction() {
    return pizza ? setOpen(false) : setOpen(true)
  }
  
  
  
  useEffect(() => {
    loadFunction();
    // dispatch(foodsData(pizza));
},[pizza])
  
  
  
  const handleClose =()=>{
    setOpen(false);
  }

  
        
  console.log("loaderdagi pizza",pizza)

    return (
        <div>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
            
        </div>
    );
}
 
 
export default Loader;