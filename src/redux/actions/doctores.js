import {
    DOCTORES_SUCCESS,
DOCTORES_FAIL,
}
from "./types"

import axios from "axios"

export const DoctoresTotal = () => async dispatch =>{
    const config = {
        headers : {
            "accept" : "application/json",
            "authorization" : "application/json"
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/doctores/doctores`,config
        )

        if (res.status === 200){
            dispatch({
                type:DOCTORES_SUCCESS,
                payload:res.data
            })
        }
        else{
            dispatch({
                type:DOCTORES_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type:DOCTORES_FAIL
        })
    }
}