import { AxiosResponse } from "axios";
import { all, call, takeLatest } from "redux-saga/effects";
import { put } from "redux-saga/effects";
// local
import {
  GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAILURE
} from "./list.action";

import axiosInstance from "../../api";

function* getList(action) {
  try {
    const response: AxiosResponse = yield call(axiosInstance.get, "events", action.payload);
    yield put({
      type: GET_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: GET_LIST_FAILURE,
      payload: error,
    });
  }
}

export default function* Saga() {
  yield all([
    takeLatest(GET_LIST_REQUEST, getList)
  ]);
};
