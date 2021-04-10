import React from "react";
import { filterData } from "../../service/Api";
import { Button } from "@material-ui/core";
import "./product.css"

const Product = (props) => {
  const { match, history } = props;
  const data = filterData(match.params.id);
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleGoBack}>
        Go back
      </Button>
      {data.map((item) => {
        return (
          <div key={item.id} className="product">
            <h1 className="product_text">Product Information</h1>
            <div className="product_item">
              <div>
              <img className="product_img" src={`${item.imgUrl}`} />
              </div>
              <h2> {item.text} </h2>
            </div>
          </div>
        );
      })}
      {/* <h1 onClick={handleGoBack}> {match.params.id}</h1> */}
    </div>
  );
};

export default Product;
