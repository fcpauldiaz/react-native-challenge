import {
  GET_DRINKS_DATA,
  SHOW_ERROR_DATA
} from './types';

import DrinksService from '../provider/services/DrinksService';

export function getData() {
  return async (dispatch) => {
    try {
        const data = await DrinksService.getDrinks();
        dispatch({ type: GET_DRINKS_DATA, data: data });
    } catch (err) {
      dispatch({ type: SHOW_ERROR_DATA, error: err });
    }
  };
}
