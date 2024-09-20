import {
    COBERTURAS_SUCCESS,
COBERTURAS_FAIL,
SET_AUTH_LOADING,
REMOVE_AUTH_LOADING
}
from "./types"
import axios from "axios"

export const TotalCoberturas = () => async dispatch =>{
    dispatch({
        type:SET_AUTH_LOADING
    })
    const config = {
        headers : {
            "accept" : "application/json",
            "authentication" : "application/json"
        }
    }
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/coberturas/coberturas`,
            config
          );
        
          if (res.status === 200)
            dispatch({
                type:COBERTURAS_SUCCESS,
                payload:res.data
        })
    
        else{
            dispatch({
                type:COBERTURAS_FAIL
            })
        }
        dispatch({
            type:REMOVE_AUTH_LOADING
        }
        )
        
     
    } catch (error) {
        dispatch({
            type:COBERTURAS_FAIL
        })
    }
    dispatch({
        type:REMOVE_AUTH_LOADING
})
}
