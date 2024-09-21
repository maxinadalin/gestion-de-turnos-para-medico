import {
    COBERTURAS_SUCCESS,
COBERTURAS_FAIL,
SET_AUTH_LOADING,
REMOVE_AUTH_LOADING,
SEARCH_COBERTURAS_SUCCESS,
SEARCH_COBERTURAS_FAIL
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

export const CoberturaSearch = () =>async dispatch =>{
    const config = {
        headers : {
            "accept" : "application/json",
            "Content-Type" : "application/json"
        }
    }

    const body = JSON.stringify({
        search
    })

    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/coberturas/searchCoberturas`,
            body,
            config
          );

          if (res.status === 200){
            dispatch({
                type: SEARCH_COBERTURAS_SUCCESS,
                payload:res.data
            })
          }
          else{
            dispatch({
                type:SEARCH_COBERTURAS_FAIL
            })
          }
    } catch (error) {
        dispatch({
            type:SEARCH_COBERTURAS_FAIL
        })
    }
}
