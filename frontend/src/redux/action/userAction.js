import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCES,
} from "../constants/userConstants";

export const login = (email, passowrd) => async (dispatch) => {
  console.log(email);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login/",
      {
        email,
        passowrd,
      },
      config
    );
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("error");
    dispatch({ type: USER_LOGIN_FAIL });
  }
};

export const register = (name, email, passowrd) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/register/",
      {
        name: name,
        email: email,
        passowrd: passowrd,
      },
      config
    );
    console.log(data);
    dispatch({ type: USER_REGISTER_SUCCES, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {}
};
