
import { GET_DRINKS_DATA, SHOW_ERROR_DATA } from '../actions/types';

const initialState = {
  data: [],
  errorMessage: null,
};

export default (state = initialState, action)=> {
  
  switch (action.type) {
    case GET_DRINKS_DATA:
      return { ...state, data: action.data.drinks };
    case SHOW_ERROR_DATA:
      return {...state, errorMessage: action.error}
    default:
      return state;
  }
};
