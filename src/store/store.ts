// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import { rootReducer, RootState } from '../reducer/root';

// const isDev = process.env.NODE_ENV === 'development';

// const devtools = isDev && window.devToolsExtension
//   ? window.devToolsExtension
//   : () => fn => fn;

function configureStore(initialState?: RootState) {
  // configure middlewares
  // const middlewares = [
  //
  // ];
  // // compose enhancers
  // const enhancer = compose(
  //   applyMiddleware(...middlewares),
  //   // devtools({
  //   //   actionsBlacklist: [null],
  //   //   maxAge: 1000
  //   // })
  // );
  // create store
  return createStore(
    rootReducer,
    initialState,
    // enhancer
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;