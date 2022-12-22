export const ACTIONS = {
  REMEMBER_PATH: "REMEMBER_PATH",
  ADD_CASE: "ADD_CASE",
  LOGIN: "LOGIN"
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

export const login = () => {
  return {
    type: ACTIONS.LOGIN,
  }
}