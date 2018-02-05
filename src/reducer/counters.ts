import Actions from '../action/actionTypes'

export type State = {
  counter: number,
};

const initialState = {
  count: 0
}

const reducer = (
  state: State = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case ActionTypes.Add:
      return {
        ...state,
        count: state.count + 1
      }
    case ActionTypes.Set:
      return {
        ...state,
        count: action.payload.count
      }
  }
}

export default reducer