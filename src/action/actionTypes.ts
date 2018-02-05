export enum TypeKeys {
  INC = 'INCREMENT',
  DEC = 'DECREMENT'
}

export interface IncrementAction {
  type: TypeKeys.INC;
  payload: number;
}

export interface DecrementAction {
  type: TypeKeys.DEC;
  payload: number;
}

export type ActionTypes =
  | IncrementAction
  | DecrementAction;
