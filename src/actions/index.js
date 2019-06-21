import { AUTH } from "../constants";

export const handleAuth = status => ({
  type: AUTH,
  payload: status
});
