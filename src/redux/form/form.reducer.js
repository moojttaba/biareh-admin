import FormActionTypes from "./form.types";

const INITIAL_STATE = {
  test: true,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormActionTypes.FORM:
      return {
        ...state,
        test: !state.hidden,
      };

    default:
      return state;
  }
};

export default formReducer;
