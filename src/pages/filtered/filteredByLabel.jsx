import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";
import "./filteredPageCard.css"


const FilteredByLabel = ( {props,data}) => {
  const { match, history } = props;


const filteredByLabel=data && data.filter((d)  =>  d.label === match.params.id )



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
        <h1 className="pizzasText">Filter Product</h1>
      <div className="filteredCard">

        
          {filteredByLabel ? (
            filteredByLabel.map((item) => {
              return <CardItem key={item.id} {...item} />
            })
          ) : (
            <h1 style={{textAlign: 'center',color:"orange"}}> Bunday nomda chiqarilgan mahsulotlarimizimiz mavjud emas</h1>
          )}


      </div>
    </div>  
  );
};

export default FilteredByLabel;