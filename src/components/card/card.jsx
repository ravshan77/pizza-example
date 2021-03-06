import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./card.css";
import { addFood } from "../../store/item/item-action"
import { useDispatch } from "react-redux"


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth:240,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    boxShadow:"0px 0px 3px black",
  },
  
  Moreinfo:{
    width:"50%",
  },
  storeIcon:{
    width:"50%"
  }
});

export default function CardItem({ label, image, totalWeight,totalTime }) {
  const item = { label, image, totalWeight };
  const dispatch =  useDispatch();
  const classes = useStyles();
  return ( 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className="flex-between_Information">
            <div className="label">
            <Typography gutterBottom variant="h5" component="h2">
              {label}
            </Typography>
            </div>
            <div className="cost">
              <h3>ππ«ππ©ππ«ππ­π’π¨π§ ππ’π¦π: {totalTime}</h3>
            <Typography gutterBottom variant="button" component="h6">
              <div>
              <span className="dic">π  πΏπππΎππππ  <span className=""><i class="discount">{new Intl.NumberFormat('en-US', {style: 'decimal'}).format((totalWeight.toFixed(2)/10)+10)} </i> π¨πͺπ’<span className="minusten">-10</span></span></span>
                <h3>{new Intl.NumberFormat('en-US', {style: 'decimal'}).format(totalWeight.toFixed(2)/10)} π¬π¨'π¦</h3>
              </div>
            </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex-between">
        <Link to={`/product/${label}`}>
          <button className="andAndMoreInfo" size="small"  variant="outlined" color="primary">
            {/* ππ¨π«π π’π§ππ¨ */}
            <img className="card-storeIcon" src="http://cdn.onlinewebfonts.com/svg/download_227886.png" />
          </button >
        </Link>
        <button className="andAndMoreInfo" 
        size="small" 
        color="primary" 
        variant="outlined"
        onClick={() => dispatch(addFood(item))}>
          {/* πππ π­π¨ πππ«π */}
          <img className="card-storeIcon" src="http://cdn.onlinewebfonts.com/svg/download_129213.png" />
        </button>

      </CardActions>
    </Card>
  );
}
