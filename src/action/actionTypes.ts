// enum TypeKeys {
//   INC = 'INCREMENT',
//   DEC = 'DECREMENT
// }
//
// export interface IncrementAction {
//   type: TypeKeys.INC;
//   payload: number;
// }
//
// export interface DecrementAction {
//   type: TypeKeys.DEC;
//   payload: number;
// }
//
// type actionTypes =
//   | IncrementAction
//   | DecrementAction;

enum actionTypes {
  INC = 'INCREMENT',
  DEC = 'DECREMENT'
}

export default actionTypes;