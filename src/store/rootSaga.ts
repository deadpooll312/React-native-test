import listSaga from "./list/list.saga";
import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([
    fork(listSaga),
  ]);
}
export default rootSaga;
