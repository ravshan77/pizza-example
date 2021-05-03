import React from "react";
import { Button } from "@material-ui/core";
import "./product.css"
import { addFood } from "../../store/item/item-action";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  goBack: {
    backgroundColor:"orange",
    color:"white"
  },

}));

const Product = ({props,data}) => {

  const classes = useStyles();
  const theme = useTheme();

  const { match, history } = props;
  
  const handleGoBack = () => {
    history.goBack();
  };

  const dispatch = useDispatch()  
  
  const filterData=data && data.filter((d)=> d.label === match.params.id)
  
  console.log("produktdagi kegan data" , data)
console.log(filterData)
  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.goBack} onClick={handleGoBack}>
        Go back
      </Button>
      {filterData && filterData.map((item) => {
        return ( <div className="product br" key={item.label}>
                    <h1 className="labelName br">{item.label}</h1>
                  <div className="d-flexx br">
                    <div className="imgeItem br">
                      <div className="imgBox br">
                        <img  className="imgg br"src={item.image}/>
                      </div>
                    </div>
                    <div className="infoItem br">
                      <div className="br">
                        <h3 style={{textAlign: 'center', color: 'white'}}>ＩＮＧＲＥＤＩＥＮＴＳ</h3>
                        {item.ingredients.map((ing) => <div className="ing_text"><h4>{ing.text}</h4></div>)}
                      </div> 
                        <h3 style={{textAlign: 'center', color: 'white'}}>ＩＮＦＯＲＭＡＴＩＯＮ</h3>
                        <br/>
                        <h3 className="h3">Label: {item.label}</h3>
                        <h3 className="h3">Source: {item.source}</h3>
                        <h3 className="h3">Yield: {item.yield}</h3>
                        <h3 className="h3">Calories: {item.calories}</h3>
                        <h3 className="h3">TotalWeight: {item.totalWeight}</h3>
                        <h3 className="h3">TotalTime: {item.totalTime}</h3>
                      <button className="addtoStore" onClick={()=> dispatch(addFood({...item}))}><h3>ᴀᴅᴅ ᴛᴏ ᴄᴀʀᴛ</h3></button>
                      </div>   
                  </div> 
                </div> )
      })}

    </div> 
  )
};

export default Product;
