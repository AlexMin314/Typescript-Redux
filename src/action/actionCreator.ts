// import actionTypes, { IncrementAction, DecrementAction } from './actionTypes';
import actionTypes from './actionTypes';

interface PureAction<T> {
  type: T;
}

interface PayloadAction<T, P> {
  type: T;
  payload: P;
}

function createActionCreator<
    A extends PayloadAction<A['type'], A['payload']>
  >(type: A['type']): (payload: A['payload']) => A;

function createActionCreator<
  A extends PureAction<A['type']>
  >(type: A['type']): () => A;

function createActionCreator<A extends {type: any, payload: any}>(type: A['type']) {
  return (payload: A['payload']) => payload === null
    ? { type } as A
    : { type, payload } as A;
}

export default {
  increment: createActionCreator(actionTypes.INC),
  decrement: createActionCreator(actionTypes.DEC),
};