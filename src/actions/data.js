// @flow
import {
  GET_DRINKS_DATA,
  SHOW_ERROR_DATA
} from './types';

export function logIn(): Function {
  return async (dispatch: *): * => {
    try {
        const api = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
        );
        const data = await api.json()
        dispatch({ type: GET_DRINKS_DATA, data: data });
    } catch (err) {
      dispatch({ type: SHOW_ERROR_DATA, error: err });
    }
  };
}
