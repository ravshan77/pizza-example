import React from "react";
import { useDispatch, useSelector  } from "react-redux";
// import { addTwoNumbers, minusTwoNumbers } from "../../store/item/item-action";
// import { CardData } from "../../service/Api";
// import { Button } from "@material-ui/core";
import "./subStore.css";
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";
import { addFood ,decreaseFood,removeFood } from "../../store/item/item-action";
// import { decreaseFood } from "../../store/item/item-action"
// import { Label } from "@material-ui/icons";



const SubStore = () => {

  const history=useHistory()


  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width:"95%",
      height:"100px",
      margin: "25px auto",
    },
  });

  const classes = useStyles();
  const dispatch = useDispatch()
  const {food} = useSelector((state) => state.cardData);



  // const dispatch = useDispatch();
  // const storeItem = useSelector((state) => state.cardData.item);
  
  return (
    <div className="Store">
    
                   <h2 className="Store_text">Store</h2>
    
           <div>
             {food.length ? food.map((data)=> { return(
              <Card className={classes.root} variant="elevation">
                <div className="d-flex">

                  <div className="buttons_Box">
                  <div className="button_group">
                    <button className="button_pilus" onClick={()=> dispatch(addFood({...data}))} >
                      <span className="pilusMinus">+</span>
                    </button>

                      <span className="count"> {data.count} </span>

                    <button className="button_minus" onClick={()=> dispatch(decreaseFood({...data}))}>
                       <span className="pilusMinus">-</span> 
                    </button>
                  </div>

                  </div>
                  <div className="img_Box">
                    <img className="img" src={`${data.image}`} />
                  </div>

                  <div className="info_Box">
                    <div className="title">
                      <h3>{data.title}</h3>
                    </div>
                    <div className="cost">
                      <h4>  {new Intl.NumberFormat('en-US', {style: 'decimal'}).format(data.totalWeight.toFixed(2)/10)} ꜱᴏ'ᴍ </h4>
                    </div>
                  </div>
                  <div className="productInfo_Box">
                  <Link to={`/product/${data.label}`}> <button className="infoButton">  <span className="infoText">Info</span>  </button> </Link>
                  </div>

                  <div className="collected_Box">
                    <div className="title">
                      <h3 className="totalPrice">{"ᴛᴏᴛᴀʟ ᴘʀɪᴄᴇ:"}</h3>
                    </div>
                    <div  className="cost">
                      <h4>  {new Intl.NumberFormat('en-US', {style: 'decimal'}).format(data.cost.toFixed(2)/10)} so'm </h4>
                    </div>
                  </div>

                  <div className="deleteCard_Box">
                    <button onClick={()=> dispatch(removeFood({...data}))} className="delete_btn"><span className="x">X</span></button>
                  </div>
                  
                </div>
              </Card> )})
            : <h1 className="Store_text">E͓̽m͓̽p͓̽t͓̽y͓̽</h1> }
           </div> 
    </div>
  )
}


export default SubStore;


///////////store page


                //   <Button className="subStore-Buttons" variant="outlined" size="small" color="primary">
                //     <Link to={`/product/${item.title}`}> Info </Link>
                //   </Button>
                //   <p className="subStore-cost"> {item.cost.toFixed(3)} so'm </p> 
                // </div>
                // <div className="subStore-toolbar">
                //   <Button
                //     variant="outlined"
                //     size="small"
                //     color="primary"
                //     onClick={() => dispatch(minusTwoNumbers())}
                //   >
                //     -
                //   </Button>
                //   <div> {storeItem} </div>
                //   <Button
                //     variant="outlined"
                //     size="small"
                //     color="primary"
                //     onClick={() => dispatch(addTwoNumbers())}
                //   >
                //     +
                //   </Button>
      
      
      
      
      
      
      
      
      // sunstore link button
    
    //   <div className="subStore-storeBtn">
    //     <Button
    //       variant="outlined"
    //       size="large"
    //       color="primary"
    //       className="full-width"
    //     >
    //       <Link to="/store">
    //       Go to Store
    //       </Link>
    //     </Button>
    //   </div>
    // </div>
    // .