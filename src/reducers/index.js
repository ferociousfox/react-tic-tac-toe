import { combineReducers } from 'redux';
import historyReducers from './history-reducers';
import xIsNextReducer from './x-is-next';
import stepNumberReducer from './step-number-reducer';

const rootReducer = combineReducers({
  history: historyReducers,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;
