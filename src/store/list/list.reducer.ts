import {GET_LIST_SUCCESS} from "./list.action";

const initialState = {
  list: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
