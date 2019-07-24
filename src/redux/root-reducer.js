import { combineReducers } from "redux";

import userReduser from "./user/user.reduser";

export default combineReducers({
  user: userReduser
});
