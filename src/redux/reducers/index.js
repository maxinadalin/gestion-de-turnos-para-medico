import { combineReducers } from "redux";
import auth from "./auth";
import coberturas from "./coberturas"

export default combineReducers({
    auth,
    coberturas,
})