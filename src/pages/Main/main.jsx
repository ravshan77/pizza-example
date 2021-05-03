import React from "react";
import CardItem from "../../components/card/card";
import Filter from "../../components/filter/filter";
import CarouselEffect from "../../components/Carousel/Carousel"
import "./main.css";

const Main = ({ pizza }) => {

  return (
    <div className="mainPage">
      <div className="carusel">
        <CarouselEffect/>
      </div>
      <div className="filter">
        <Filter />
      </div>
      <div className="cards">
        {pizza && pizza.map((c, i) => {
          return <CardItem key={i} {...c} />;
        })}
      </div>
    </div>
  );
};

export default Main;
