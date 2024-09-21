import {
    DOCTORES_SUCCESS,
DOCTORES_FAIL,
}
from "../actions/types"

const initialState = {
    doctores : false
}

export default function (state = initialState, actions) {
    const {type,payload} = actions;


    switch (type) {
        case DOCTORES_SUCCESS:
            return {
                ...state,
                doctores : payload.doctores
            };
        case DOCTORES_FAIL:
            return{
                ...state,
                doctores : false
            };

        default:
            return state;
    }
}