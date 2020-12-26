import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const user = createSelector(
  [selectUser],
  user => user
);

export const selectSWitchSignUpSignIn = createSelector(
  [selectUser],
  user => user.signUpSwitch
);

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);


