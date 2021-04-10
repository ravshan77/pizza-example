import React from "react";
import { Link } from "react-router-dom";
import "./subStore.css";
import { CardData } from "../../service/Api";
import { Button } from "@material-ui/core";

const SubStore = () => {
  console.log(CardData);
  return (
    <div className="subStore-card_data">
      <ul>
        {CardData.map((item) => {
          return (
            <li className="subStore-card_items">
              <img src={item.imgUrl} className="subStore-img" alt="item" />
              <div className="subStore-info">
                <p className="subStore-text"> {item.title} </p>
                <div className="subStore-infoLine">
                  <Button className="subStore-Buttons" variant="outlined" size="small" color="primary">
                    <Link to={`/product/${item.title}`}> Info </Link>
                  </Button>
                  <p className="subStore-cost"> {item.cost.toFixed(3)} so'm </p> 
                </div>
                <div className="subStore-toolbar">
                  <Button className="subStore-Buttons" variant="outlined" size="small" color="primary">
                    -
                  </Button>
                  <div> 0 </div>
                  <Button className="subStore-Buttons" variant="outlined" size="small" color="primary">
                    +
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="subStore-storeBtn">
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className="full-width"
        >
          <Link to="/store">
          Go to Store
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SubStore;
