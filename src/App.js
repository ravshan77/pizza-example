import "./App.css";
import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";
import Product from "./pages/Product/product";
import FilteredByLabel from "./pages/filtered/filteredByLabel"
import FilteredByCost from "./pages/filtered/filteredByCost"
import FilteredByDate from "./pages/filtered/filteredByDate";
import React,{ lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pizza from "./pages/pizza/pizza";
import Drink from "./pages/drink/drink";
import Food from "./pages/food/food";
import Cake from "./pages/cake/cake";
import { useSelector } from "react-redux"
import GoToStore from "./pages/goToStore/goToStore"
import Login from "./pages/Reg/login"
import Footer from "./components/footer/footer"
import Example from "./components/example"
// import Card from "./components/mobx/card"
// import List from "./components/mobx/list"
import { observable ,action } from "mobx"
import Memo from "./components/hook/memo";

// const List =lazy(() => import("./components/mobx/list"))
// const Card =lazy(() => import("./components/mobx/card"))


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



function App() {
  
  // const {foods} = useSelector((state) => state.cardData);

  
  // console.log("stordan App ga kegan foods",foods)
  
  // const classes = useStyles();




  return (
    <div className="App">
      <Memo />
      {/* <Suspense fallback={<h1>loading...</h1>} >
        <Card />
        <List />
      </Suspense> */}
{/* 
      <Header />
      <Switch>

        <Route 
          path="/" 
          exact 
          render={(props) => <Pizza props={props} />} />

        <Route 
          path="/drink" 
          exact 
          render={(props) => <Drink props={props} />} />

        <Route 
          path="/food" 
          exact 
          render={(props) => <Food props={props} />} />

        <Route 
          path="/cake" 
          exact 
          render={(props) => <Cake props={props}  />} />

        <Route
          path="/goToStore"
          render={(props) => {
            return <GoToStore props={props}  />;
          }}
        />

        <Route
          path="/login"
          render={(props) => {
            return <Login props={props}  />;
          }}
        />  

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

      </Switch> */}
      {/* <Footer/> */}
      {/* <Example/> */}
    </div>
  );
}

export default App;
