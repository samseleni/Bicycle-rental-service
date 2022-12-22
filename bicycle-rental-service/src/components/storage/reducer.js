import { ACTIONS } from "./action";

const initialState = {
  isLogin: false,
  prePath: "/",
  cases: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REMEMBER_PATH:
      return { ...state, prePath: action.prePath };
    case ACTIONS.ADD_CASE: {
      return { ...state, cases: [...state.cases, action.case] };

    }
    default: return state
  }
}

export default reducer;