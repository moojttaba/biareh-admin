import { createSelector } from "reselect";

const selectForm = (state) => state.Form;

export const selectDrawerHidden = createSelector(
  [selectForm],
  (state) => state.test
);