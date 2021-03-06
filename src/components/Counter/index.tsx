import React, { FC, useState } from 'react';
import { Container } from './Counter.style';

export interface CounterProps {
  height?: number;
}

const Counter: FC<CounterProps> = ({ ...rest }) => {
  const [count, setCount] = useState(0);
  return (
    <Container {...rest} data-testid="component">
      <p data-testid="count">Count : {count}</p>
      <button type="button" onClick={() => setCount(count + 1)} data-testid="button">
        Click Me!
      </button>
    </Container>
  );
};

export default Counter;
