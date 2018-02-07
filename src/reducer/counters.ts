import { ActionTypes, TypeKeys } from '../action/actionTypes';

export type State = {
  counter: number,
};

const initialState = {
  counter: 0
};

const reducer = (
  state: State = initialState,
  action: ActionTypes
): State => {
  switch (action.type) {
    case TypeKeys.INC:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case TypeKeys.DEC:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};

export default reducer;