import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";
import "./filteredPageCard.css"

// import { filterByDate  } from "../../service/Api";

const FilteredByDate = ({props,data}) => {
  const { match, history } = props;

  console.log("propis",props)

const filteredByData=data && data.filter((d)  =>  d.totalTime <= match.params.id )

console.log("filteredByData",filteredByData)
console.log("data",data)

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

      <h1 className="pizzasText">Filter Product</h1>

      <div className="filteredCard">

        
        {filteredByData ? (
            filteredByData.map((item) => {
              return <CardItem key={item.id} {...item} />;
            })
        ) : (
          <h1 style={{textAlign: 'center',color:"orange"}}> Bunday kunda chiqarilgan mahsulotlarimizimiz mavjud emas</h1>
          )}
      


      </div>
    </div>
  );
};

export default FilteredByDate;
