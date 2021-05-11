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
        return ( <div className="product b" key={item.label}>
                    <h1 className="labelName">{item.label}</h1>
                  <div className="d-flexx">
                    <div className="imgeItem">
                      <div className="imgBox">
                        <img  className="imgg"src={item.image}/>
                      </div>
                    </div>
                    <div className="infoItem">
                      <div>
                        <h3 style={{textAlign: 'center', color: 'white'}}>ＩＮＧＲＥＤＩＥＮＴＳ</h3>
                        {item.ingredients.map((ing) => <div><h4>{ing.text}</h4></div>)}
                      </div> 
                        <h3 className="information">ＩＮＦＯＲＭＡＴＩＯＮ</h3>
                        <br/>
                        <h3 className="h3">Label: {item.label}</h3>
                        <h3 className="h3">Source: {item.source}</h3>
                        <h3 className="h3">Yield: {item.yield}</h3>
                        <h3 className="h3">Calories: {item.calories}</h3>
                        <h3 className="h3">TotalWeight: {item.totalWeight}</h3>
                        <h3 className="h3">TotalTime: {item.totalTime}</h3>
                      <button className="addtoStore" onClick={()=> dispatch(addFood({...item}))}>
                        {/* <h3>ᴀᴅᴅ ᴛᴏ ᴄᴀʀᴛ</h3> */}
                        <img className="card-storeIcon" src="http://cdn.onlinewebfonts.com/svg/download_129213.png" />
                      </button>
                      </div>   
                  </div> 
                </div> )
      })}

    </div> 
  )
};

export default Product;
