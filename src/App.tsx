import * as React from 'react';
import MapList from './components/MapList';
import actions from './action/actionCreator';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from './reducer/root';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import Counter from './containers/Counter';

const item = [
  'apple',
  'orange',
  'pear'
];

export interface AppProps extends RouteComponentProps<any> {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export interface AppState { }

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/counter"
            render={(props) => <Counter {...{...this.props, ...props}}/>}
          />
          <Route
            exact={true}
            path="/map/:id"
            render={() => <MapList items={item} render={(e, i) => <div key={i}>{e}</div>}/>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const s = (state: RootState, props: AppProps) => ({
  counter: state.counters.counter
});

const d = (dispatch: Dispatch<RootState>, props: AppProps) => ({
  increment: () => dispatch(actions.increment(1)),
  decrement: () => dispatch(actions.decrement(1)),
});

export default connect<{}, {}, AppProps>
  (s, d)(App) as React.ComponentClass<{}>;
