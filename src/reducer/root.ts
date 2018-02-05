import { combineReducers } from 'redux';
import countersReducer from './counters';
import RootAction from '../action/actionTypes';

interface StoreEnhancerState { }

interface CountersState {
  counters: number;
}

export interface RootState extends StoreEnhancerState {
  counters: CountersState;
}

export const rootReducer = combineReducers<RootState, RootAction>({
  counters: countersReducer,
});