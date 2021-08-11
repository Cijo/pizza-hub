import { combineReducers } from "redux";
import listingReducer from "./listingReducer";
import bagReducer from "./bagReducer";

export default combineReducers({
    listingReducer,
    bagReducer
});