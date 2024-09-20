import {
    COBERTURAS_SUCCESS,
COBERTURAS_FAIL,
SET_AUTH_LOADING,
REMOVE_AUTH_LOADING
}
from "../actions/types"

const initialState = {
coberturas: false,
loading:false
    //esto es lo que aparece en redux
  };
  
  export default function (state = initialState, actions) {
    const { type, payload } = actions;

    switch (type) {

        case SET_AUTH_LOADING:
            return {
              ...state,
              loading: true,
            };
          case REMOVE_AUTH_LOADING:
            return {
              ...state,
              loading: false,
            };

        case COBERTURAS_SUCCESS:
            return{
                ...state,
                coberturas : payload.coverage
            }

        case COBERTURAS_FAIL :
            return{             
                ...state,
                coberturas : false
            } 
        default:
            return state;
    }

}