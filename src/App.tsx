import * as React from 'react';
import Button from './components/Button';
import MapList from './components/MapList';

const item = [
  'apple',
  'orange',
  'pear'
];

export interface AppProps {
  message?: string;
}
export interface AppState {
  count: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
        count: 0
    };
  }

  increment = () => {
    this.setState({
        count: this.state.count + 1
    });
  }

  render() {
    return (
        <React.Fragment>
          <div>{this.props.message}</div>
          {this.state.count}
          <Button onClick={this.increment} name={'Increment'}/>
          <Button onClick={this.increment} name={'Decrement'}/>
          <MapList items={item} itemRenderer={(e, i) => <div key={i}>{e}</div>}/>
        </React.Fragment>
    );
  }
}

export default App;
