// root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses // must match the alias of the import
});

export default rootReducer;

