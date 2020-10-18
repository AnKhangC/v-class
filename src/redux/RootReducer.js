import { combineReducers } from 'redux';
import neighboursReducer from './neighbours/neighbours.reducer';

const RootReducer = combineReducers({
  neighbours: neighboursReducer,
});
export default RootReducer;