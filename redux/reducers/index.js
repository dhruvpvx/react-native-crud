import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import detailsReducer from "./detailsReducer";

export default combineReducers({
  Data: dataReducer,
  Details: detailsReducer
})