import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";
import "./filteredPageCard.css"
import { filterByCost } from "../../service/Api";

const FilteredByCost = (props) => {
  const { match, history } = props;
  const byCost = filterByCost(match.params.id);
  
  console.log("costBuyich" ,byCost)
  // console.log(match.params.id);
  return (
    <div>  
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.goBack()}
        >
          {" "}
          Go back{" "}
        </Button>
        <h1 className="pizzasText">Pizzas</h1>
      <div className="filteredCard">

      
        
          {byCost.length ? (
            byCost.map((item) => {
              return <CardItem key={item.id} {...item} />
            })
          ) : (
            <h1> Bunday narxda chiqarilgan mahsulotlarimizimiz mavjud emas</h1>
          )}


      </div>
    </div>  
  );
};

export default FilteredByCost;