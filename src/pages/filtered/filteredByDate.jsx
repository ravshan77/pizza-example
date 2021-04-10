import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";
import "./filteredPageCard.css"

import { filterByDate  } from "../../service/Api";

const FilteredByDate = (props) => {
  const { match, history } = props;
  const byDate = filterByDate(match.params.id);
  console.log("dataBuyicha" ,byDate);
  return (
    <div >
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

        
        {byDate.length ? (
            byDate.map((item) => {
              return <CardItem key={item.id} {...item} />;
            })
        ) : (
          <h1> Bunday kunda chiqarilgan mahsulotimiz mavjud emas </h1>
          )}
      


      </div>
    </div>
  );
};

export default FilteredByDate;
