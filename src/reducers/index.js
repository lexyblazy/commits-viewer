import { AUTH } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH: {
      return { ...state, isAuthenticated: action.payload };
    }
    default:
      return state;
  }
}
