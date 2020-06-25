import { combineReducers } from "redux";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
});
