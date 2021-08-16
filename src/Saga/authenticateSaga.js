import { takeEvery, call, put } from "redux-saga/effects";
import { logIn } from "../actions";
import { AUTHENTICATE } from "../actions";
import { serverLogin } from "../api";



///Сага авторизации
export function* authenticateSaga(action) {
  const { email, password, nick } = action.payload;
  const success = yield call(serverLogin, email, password);
  if (success.success) {
    let storage = localStorage;
    storage['userLogin'] = JSON.stringify([email, password, nick]);
    yield put(logIn(nick));
  } else if (success.success){
    alert('Пользователя с такими данными не существует, зарегистрируйтесь')
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}