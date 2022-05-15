import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countdownReducer from "./reducers/countdownReducer";
const store = createStore(countdownReducer, applyMiddleware(thunk));

export default store;
//creating Store and adding applying middleware to thunk
