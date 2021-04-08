import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";

import { filterByDate } from "../../service/Api";

const Filtered = (props) => {
  const { match, history, location } = props;
  const byDate = filterByDate(match.params.id);
  console.log(byDate);
  console.log(match.params.id);
  return (
    <div className="filteredCard">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.goBack()}
      >
        {" "}
        Go back{" "}
      </Button>
      {byDate.length ? (
        byDate.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })
      ) : (
        <h1> Bunday kunda chiqarilgan mahsulotimiz mavjud emas </h1>
      )}
    </div>
  );
};

export default Filtered;
