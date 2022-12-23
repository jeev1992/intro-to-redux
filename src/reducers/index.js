import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import formReducer from "./formReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer, authReducer, formReducer
})

export default allReducers;