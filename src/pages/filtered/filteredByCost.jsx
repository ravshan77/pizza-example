import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";
import "./filteredPageCard.css"


const FilteredByCost = ( {props,data}) => {
  const { match, history } = props;

const filteredByCost=data && data.filter((d)  =>  d.totalWeight.toFixed(3)*100 <= match.params.id )


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
        <h1 className="pizzasText">ᖴIᒪTEᖇ ᑭᖇOᗪᑌᑕT</h1>
      <div className="filteredCard">

          {filteredByCost ? (
            filteredByCost.map((item) => {
              return <CardItem key={item.id} {...item} />
            })
          ) : (
            <h1 style={{textAlign: 'center',color:"orange"}}> Bunday narxda chiqarilgan mahsulotlarimizimiz mavjud emas</h1>
          )}

      </div>
    </div>  
  );
};

export default FilteredByCost;