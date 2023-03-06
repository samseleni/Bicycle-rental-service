import { ACTIONS, signInFail, signInRequest, signInSuccess, signUpFail, signUpRequest, signUpSuccess } from "../action";
import data from "../../mock.json";
import axios from 'axios';

const startCases = data.cases;
const startOfficers = data.officers;

const initialIsLogin = JSON.parse(window.localStorage.getItem("user")) || [];

const initialState = {
  isLogin: initialIsLogin ? true : false,
  prePath: "/",
  cases: startCases,
  officers: startOfficers
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REMEMBER_PATH:
      return { ...state, prePath: action.prePath };
    case ACTIONS.ADD_CASE: {
      return { ...state, cases: [...state.cases, action.case] };
    }
    case ACTIONS.EDIT_CASE: {
      return {
        ...state, cases: state.cases.map(item => {
          if (item.id === action.id) {
            return action.case;
          } else {
            return item;
          }
        })
      }
    }
    case ACTIONS.REMOVE_CASE: {
      return { ...state, cases: state.cases.filter(item => item.id !== action.id) }
    }
    case ACTIONS.EDIT_OFFICER: {
      return {
        ...state, officers: state.officers.map(officer => {
          if (officer.id === action.id) {
            return action.officer;
          } else {
            return officer;
          }
        })
      }
    }
    case ACTIONS.REMOVE_OFFICER: {
      return { ...state, officers: state.officers.filter(item => item.id !== action.id) }
    }

    case ACTIONS.SIGN_IN_REQUEST: {
      return {
        ...state,
      }
    }
    case ACTIONS.SIGN_IN_SUCCESS: {
      return {
        ...state, isLogin: true
      }
    }
    case ACTIONS.SIGN_IN_FAIL: {
      return {
        ...state,
        error: action.error,
      }
    }

    case ACTIONS.SIGN_OUT: {
      return {
        ...state, isLogin: false
      }
    }
    case ACTIONS.SIGN_UP_REQUEST: {
      return {
        ...state,
      }
    }
    case ACTIONS.SIGN_UP_SUCCESS: {
      return { ...state, officers: [...state.officers, action.officer] };
    }
    case ACTIONS.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.error,
      }
    default: return state
  }
}

export default reducer;

export const signIn = (values) => {
  return async function (dispatch) {
    dispatch(signInRequest());
    await axios
      .post("https://sf-final-project-be.herokuapp.com/api/auth/sign_in", {
        email: values.email,
        password: values.password
      })
      .then((response) => {
        if (response.data.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
        }
        dispatch(signInSuccess(response.data.data.user));
      })
      .catch((response) => dispatch(signInFail(response)));
  }
}

export const signUp = (values) => {
  return function (dispatch) {
    dispatch(signUpRequest());
    axios
      .post("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        approved: values.approved,
        clientId: values.clientId,
      })
      .then(() => {
        dispatch(signUpSuccess(values));
      })
      .catch((response) => dispatch(signUpFail(response)));
  }
}

