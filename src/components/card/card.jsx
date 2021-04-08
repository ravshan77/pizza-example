import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "./card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardItem({ title, text, imgUrl, cost }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className="flex-between">
            <Typography gutterBottom variant="h5" component="h2">
              {title.toUpperCase()}
            </Typography>
            <Typography gutterBottom variant="button" component="h6">
              {cost} so'm
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex-between">
        <Link to={`/product/${title}`}>
          <Button size="small" color="primary">
            More info
          </Button>
        </Link>
        <Button size="small" color="primary" variant="outlined">
          Add to card
        </Button>
      </CardActions>
    </Card>
  );
}
