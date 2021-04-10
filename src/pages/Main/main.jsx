import React from "react";
import CardItem from "../../components/card/card";
import Filter from "../../components/filter/filter";

import "./main.css";

const Main = ({ card }) => {
  return (
    <div className="mainPage">
      <div className="filter">
        <Filter />
      </div>
      <div className="cards">
        {card.map((c, i) => {
          return <CardItem key={i} {...c} />;
        })}
      </div>
    </div>
  );
};

export default Main;
