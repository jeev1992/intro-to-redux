import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import formReducer from "./formReducer";
import getDataFromApiReducer from "./getDataFromApiReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer, authReducer, formReducer, getDataFromApiReducer
})

export default allReducers;