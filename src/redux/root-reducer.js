import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import uiReducer from "./ui/ui.reducer";
import userReducer from "./user/user.reducer";
import { reducer as formReducer } from 'redux-form';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
