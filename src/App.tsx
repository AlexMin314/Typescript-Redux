import * as React from 'react';
import Button from './components/Button';
import MapList from './components/MapList';
import actions from './action/actionCreator';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from './reducer/root';

const item = [
  'apple',
  'orange',
  'pear'
];

export interface AppProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export interface AppState { }

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
        <React.Fragment>
          <div>{`Counter : ${this.props.counter}`}</div>
          <Button
            onClick={this.props.increment}
            name={'Increment'}
            margined={true}
            primary={true}
          />
          <Button
            onClick={this.props.decrement}
            name={'Decrement'}
            margined={true}
          />
          <MapList
            items={item}
            render={(e, i) => <div key={i}>{e}</div>}
          />
        </React.Fragment>
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
