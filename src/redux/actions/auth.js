import { type } from "@testing-library/user-event/dist/type";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  LOGOUT,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
} from "./types";

import axios from "axios";

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      token: localStorage.getItem("access"),
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      );

      if (res.status === 200)
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const Sign_Up =
  (email, first_name, last_name, password, re_password) => async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    });

    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
      first_name,
      last_name,
      password,
      re_password,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        body,
        config
      );

      if (res.status === 201)
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      else {
        dispatch({
          type: SIGNUP_FAIL,
        });
      }
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
    }
  };

export const activate = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "appliction/json",
    },
  };
  const body = JSON.stringify({
    uid,
    token,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    );

    if (res.data === 200) {
      dispatch({
        type: ACTIVATION_SUCCESS,
      });
    } else {
      dispatch({
        type: ACTIVATION_FAIL,
      });
    }
  } catch (error) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};
export const Load_user = () =>async dispatch => {
  if (localStorage.getItem("access")) {
      const config = {
          headers:{
              "accept" :"application/json",
              'Authorization': `JWT ${localStorage.getItem('access')}`,
          }
      }
      try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);
      
          if (res.status === 200) {
             dispatch({
                 type:USER_LOADED_SUCCESS,
                 payload:res.data
             })
          }else{
             dispatch({
                 type:USER_LOADED_FAIL,
             })
          } 
      } catch (error) {
          dispatch({
              type:USER_LOADED_FAIL,
          })
      }
      
   
  
  }else{
      dispatch({
          type:USER_LOADED_FAIL,
      })
  }
}

export const Sign_In = (email, password) => async dispatch => {
  dispatch({
    type: SET_AUTH_LOADING,
  });
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );
    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(Load_user());
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  }
};

export const Refresh = () =>async dispatch =>{
  if (localStorage.getItem("refresh")) {
    const config = {
      headers : {
        "accept" : "application/json",
        "Content-Type" : "application/json"
      }
    }
    const body = JSON.stringify({
     refresh:  localStorage.getItem("refresh")
    })

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`,body,config
      )

      if (res.status === 200) {
        dispatch({
          type: REFRESH_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: REFRESH_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: REFRESH_FAIL,
      });
    }
  } else {
    dispatch({
      type: REFRESH_FAIL,
    });
  }
  }

  export const logout = () => async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };