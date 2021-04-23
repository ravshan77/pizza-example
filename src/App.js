import "./App.css";
import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";
import Product from "./pages/Product/product";
import FilteredByLabel from "./pages/filtered/filteredByLabel"
import FilteredByCost from "./pages/filtered/filteredByCost"
import FilteredByDate from "./pages/filtered/filteredByDate";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pizza from "./pages/Pizza/pizza";
import Drink from "./pages/Drink/drink";
import { useSelector } from "react-redux"
import Food from "./pages/food/food";
// import Main from "./pages/Main/main";
// import { useFetch } from "./components/useFetch"
// import { useEffect,useState } from "react"
// import { CircularProgress } from "@material-ui/core";
// import Backdrop from '@material-ui/core/Backdrop';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



function App() {
  
  const {foods} = useSelector((state) => state.cardData);

  
  console.log("stordan App ga kegan foods",foods)
  
  const classes = useStyles();



  return (
    <div className="App">

      <Header />
      <Switch>

        <Route 
          path="/" 
          exact 
          render={() => <Pizza />} />

        <Route 
          path="/drink" 
          exact 
          render={() => <Drink  />} />

        <Route 
          path="/food" 
          exact 
          render={() => <Food  />} />  
              

        <Route
          path="/product/:id"
          render={(props) => {
            return <Product props={props} data={foods} />;
          }}
        />
          <Route
            path="/filteredByLabel/:id"
            render={(props) => {
              return <FilteredByLabel props={props} data={foods}  />;
            }}
          />

        <Route
        path="/filteredByCost/:id"
        render={(props) => {
          return <FilteredByCost props={props} data={foods} />;
        }}
        />  

        <Route
          path="/filteredByDate/:id"
          render={(props) => {
            return <FilteredByDate props={props} data={foods} />;
          }}
        />

      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
