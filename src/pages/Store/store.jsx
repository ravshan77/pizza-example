import { Button, Link } from "@material-ui/core";
import React from "react";
import "./store.css";
import { useHistory } from "react-router-dom"


const Store = () => {

  const history=useHistory()

  const handleGoBack = () => {
    history.goBack();
  };

  return(
      <div>

<Button variant="outlined" color="primary" onClick={handleGoBack}>
        Go back
      </Button>

        <h1 className="store_text">Store</h1>

          <div className="store">
            
                <div className="card_info">
                  <div className="card_img">
                    <img className="img" src="https://im0-tub-ru.yandex.net/i?id=30008d23e8fb0682c83fb1556b8d3af3&n=13" />
                  </div>
                  <h3>title</h3>
                  <div className="store_button_group">
                    <Button variant="outlined"  className="store_btn">+</Button>
                    <div className="store_btn">1</div>
                    <Button variant="outlined" className="store_btn">-</Button>
                  </div>
                  <h3>120.000 sum</h3>
                  <Button variant="outlined" className="store_btn">X</Button>
                </div>
            
        </div>

      </div>);
};

export default Store;
