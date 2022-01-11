import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import detailsReducer from "./detailsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  Data: dataReducer,
  User : userReducer,
  Details: detailsReducer
})