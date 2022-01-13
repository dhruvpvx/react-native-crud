import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import detailsReducer from "./detailsReducer";
import updateReducer from "./updateReducer";

export default combineReducers({
  Data: dataReducer,
  Details: detailsReducer,
  Update: updateReducer
})