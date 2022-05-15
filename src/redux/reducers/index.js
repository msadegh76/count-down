import { combineReducers } from "redux";
import countdownReducer from "./countdownReducer";
const rootReducers = combineReducers({
	countdownReducer,
});

export default rootReducers;
//combining all Reducers together  //still have one
