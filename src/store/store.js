import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import Logger from "redux-logger"

const middleWare = [Logger];
if(process.env.NODE_ENV === "development"){
    middleWare.push(Logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));
export default store;
