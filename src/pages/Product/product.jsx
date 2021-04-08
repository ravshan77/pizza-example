import React from "react";
import { filterData } from "../../service/Api";
import { Button } from "@material-ui/core";

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
          <div key={item.id}>
            <h1> {item.text} </h1>
          </div>
        );
      })}
      {/* <h1 onClick={handleGoBack}> {match.params.id}</h1> */}
    </div>
  );
};

export default Product;
