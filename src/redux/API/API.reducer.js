import APIActionTypes from "./API.actions";

const INITIAL_STATE = {
  request: null,
};

const APIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APIActionTypes.FETCH_POSTS:
      console.log(action.payload.data);
      return {
       // ...state,
      };

    default:
      return state;
  }
};

export default APIReducer;
