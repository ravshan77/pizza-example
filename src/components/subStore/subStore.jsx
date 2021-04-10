import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======

import { useDispatch, useSelector } from "react-redux";

import { addTwoNumbers, minusTwoNumbers } from "../../store/item/item-action";

>>>>>>> 5d6f8301bb48d44a60ca65b780082c39dd854209
import "./subStore.css";
import { CardData } from "../../service/Api";
import { Button } from "@material-ui/core";

const SubStore = () => {
  const dispatch = useDispatch();
  const storeItem = useSelector((state) => state.cardData.item);
  // console.log(CardData);
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
<<<<<<< HEAD
                  <Button className="subStore-Buttons" variant="outlined" size="small" color="primary">
                    -
                  </Button>
                  <div> 0 </div>
                  <Button className="subStore-Buttons" variant="outlined" size="small" color="primary">
=======
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => dispatch(minusTwoNumbers())}
                  >
                    -
                  </Button>
                  <div> {storeItem} </div>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => dispatch(addTwoNumbers())}
                  >
>>>>>>> 5d6f8301bb48d44a60ca65b780082c39dd854209
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
