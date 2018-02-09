import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../components/Button';

interface CounterProps extends RouteComponentProps<any> {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.SFC<CounterProps> = props => {
  console.log('props: ', props);
  return (
    <React.Fragment>
      <div>{`Current Path : ${props.location.pathname}`}</div>
      <div>{`Counter : ${props.counter}`}</div>
      <Button
        onClick={props.increment}
        name={'Increment'}
        margined={true}
        primary={true}
      />
      <Button
        onClick={props.decrement}
        name={'Decrement'}
        margined={true}
      />
    </React.Fragment>
  );
};

export default Counter;