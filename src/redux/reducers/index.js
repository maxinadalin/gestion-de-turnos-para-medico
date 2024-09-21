import { combineReducers } from "redux";
import auth from "./auth";
import coberturas from "./coberturas"
import doctores from "./doctores";

export default combineReducers({
    auth,
    coberturas,
    doctores
})