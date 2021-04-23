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
    maxWidth: 345,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    boxShadow:"0px 0px 3px black"
  },
  
  Moreinfo:{
    width:"50%"
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
              <h3>𝐏𝐫𝐞𝐩𝐚𝐫𝐚𝐭𝐢𝐨𝐧 𝐓𝐢𝐦𝐞: {totalTime}</h3>
            <Typography gutterBottom variant="button" component="h6">
              <div>
              <span className="dic">👉  𝘿𝙄𝙎𝘾𝙊𝙐𝙉𝙏  <span className=""><i class="discount">{new Intl.NumberFormat('en-US', {style: 'decimal'}).format((totalWeight.toFixed(2)/10)+10)} </i> 𝙨𝙪𝙢<span className="minusten">-10</span></span></span>
                <h3>{new Intl.NumberFormat('en-US', {style: 'decimal'}).format(totalWeight.toFixed(2)/10)} 𝐬𝐨'𝐦</h3>
              </div>
            </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex-between">
        <Link to={`/product/${label}`}>
          <button className="andAndMoreInfo" size="small"  variant="outlined" color="primary">
            𝐌𝐨𝐫𝐞 𝐢𝐧𝐟𝐨
          </button >
        </Link>
        <button className="andAndMoreInfo" 
        size="small" 
        color="primary" 
        variant="outlined"
        onClick={() => dispatch(addFood(item))}>
          𝐀𝐝𝐝 𝐭𝐨 𝐜𝐚𝐫𝐝
        </button>

      </CardActions>
    </Card>
  );
}
