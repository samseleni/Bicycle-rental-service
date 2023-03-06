export const ACTIONS = {
  REMEMBER_PATH: "REMEMBER_PATH",
  ADD_CASE: "ADD_CASE",
  EDIT_CASE: "EDIT_CASE",
  REMOVE_CASE: "REMOVE_CASE",
  SIGN_UP: "SIGN_UP",
  ADD_OFFICER: "ADD_OFFICER",
  EDIT_OFFICER: "EDIT_OFFICER",
  REMOVE_OFFICER: "REMOVE_OFFICER",
  SIGN_IN_REQUEST: "SIGN_IN_REQUEST",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAIL: "SIGN_IN_FAIL",
  SIGN_OUT: "SIGN_OUT",
  SIGN_UP_REQUEST: "SIGN_UP_REQUEST",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAIL: "SIGN_UP_FAIL",
}

export const rememberPath = (prePath) => {
  return {
    type: ACTIONS.REMEMBER_PATH,
    prePath
  }
}

export const addCase = (values) => {
  return {
    type: ACTIONS.ADD_CASE,
    case: values
  }
}

export const editCase = (id, values) => {
  return {
    type: ACTIONS.EDIT_CASE,
    id,
    case: values,
  }
}

export const removeCase = (id) => {
  return {
    type: ACTIONS.REMOVE_CASE,
    id
  }
}

export const editOfficer = (id, values) => {
  return {
    type: ACTIONS.EDIT_OFFICER,
    id,
    officer: values
  }
}

export const removeOfficer = (id) => {
  return {
    type: ACTIONS.REMOVE_OFFICER,
    id
  }
}

//----------------------------------------------

export const signInRequest = () => {
  return {
    type: ACTIONS.SIGN_IN_REQUEST,
  }
}

export const signInSuccess = (data) => {
  return {
    type: ACTIONS.SIGN_IN_SUCCESS,
    payload: data
  }
}

export const signInFail = (error) => {
  return {
    type: ACTIONS.SIGN_IN_FAIL,
    payload: error
  }
}

//----------------------------------------------

export const signOut = () => {
  return {
    type: ACTIONS.SIGN_OUT,
  }
}

//----------------------------------------------

export const signUpRequest = () => {
  return {
    type: ACTIONS.SIGN_UP_REQUEST,
  }
}

export const signUpSuccess = (data) => {
  return {
    type: ACTIONS.SIGN_UP_SUCCESS,
    officer: data
  }
}

export const signUpFail = (error) => {
  return {
    type: ACTIONS.SIGN_UP_FAIL,
    payload: error
  }
}