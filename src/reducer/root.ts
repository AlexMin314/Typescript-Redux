import { combineReducers } from 'redux';
import countersReducer from './counters';
// import { ActionTypes } from '../action/actionTypes';

interface StoreEnhancerState { }

interface CountersState {
  counter: number;
}

export interface RootState extends StoreEnhancerState {
  counters: CountersState;
}

export const rootReducer = combineReducers<RootState>({
  counters: countersReducer,
});