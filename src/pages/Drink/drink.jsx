import React,{ useEffect } from "react";
import { useFetch } from "../../components/useFetch"
import Main from "../Main/main"
import { useDispatch } from "react-redux"
import { foodsData } from "../../store/item/item-action"
import Loader from "../loader/loader"

  
  const Drink = () => {
    
  const dispatch = useDispatch()
  
  
  const APP_ID = "57e2140e"
  const APP_KEY = "8296dd333e28a28ed070e8554821dfeb";
  const resData = useFetch( `https://api.edamam.com/search?q=drink&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`)
  
  const pizza = resData.more && resData.hits.map((item) => item.recipe);
  // pizza && dispatch(foodsData(pizza))

  function Date() {
       
    return  pizza && dispatch(foodsData(pizza))
  }

useEffect(()=> {

  Date()
 }, [resData]) 
        
  console.log("drinkdagi pizza",pizza)

  return (
      <div>
        <Main pizza={pizza} />
        <Loader pizza={pizza} />
        {/* { pizza && dispatch(foodsData(pizza)) } */}
      </div>
      
  );
};

export default Drink;