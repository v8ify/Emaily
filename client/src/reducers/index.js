import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || false;
    default:
      return state;
  }
};

const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SURVEYS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer,
});
