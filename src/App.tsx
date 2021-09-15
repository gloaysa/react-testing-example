import React, { FC } from 'react';
import { Container } from 'styles/App.style';
import GlobalStyle from 'styles/globalStyles';
import Counter from 'components/Counter';

const App: FC = () => (
  <div>
    <GlobalStyle />
    <Container>
      <Counter />
    </Container>
  </div>
);

export default App;
