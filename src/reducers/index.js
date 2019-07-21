import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import data from './data';

const rootReducer = combineReducers({
  data,
});

export default rootReducer;
