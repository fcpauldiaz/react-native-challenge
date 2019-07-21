// @flow

import { GET_DRINKS_DATA, SHOW_ERROR_DATA } from '../actions/types';

const initialState = {
  data: [],
  errorMessage: null,
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case GET_DRINKS_DATA:
      return { ...state, data: action.data };
    case SHOW_ERROR_DATA:
      return {...state, errorMessage: action.error}
    default:
      return state;
  }
};
