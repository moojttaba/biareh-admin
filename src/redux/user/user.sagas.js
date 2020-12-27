import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import axios from "axios";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  // signUpSuccess,
  // signUpFailure,
} from "./user.actions";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const user = yield axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    }).then((response) => response.data);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}



// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//     yield put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//   }
// }

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// export function* onCheckUserSession() {
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// export function* onSignUpStart() {
//   yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
// }

// export function* onSignUpSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignOutStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess),
  ]);
}
