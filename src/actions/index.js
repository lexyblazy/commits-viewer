import { AUTH } from "../constants";

export const handleAuth = status => {
  return {
    type: AUTH,
    payload: status
  };
};
