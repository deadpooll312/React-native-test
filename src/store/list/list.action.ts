import {createActions} from 'redux-actions';


export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";

export const {getListRequest} = createActions({
  [GET_LIST_REQUEST]: (data) => ({
    data,
  }),
});
