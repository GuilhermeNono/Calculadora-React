import React from 'react';

import { Container, Body, Screen} from './styles';

import Keyboard from '../Keyboard';

const Calculator: React.FC = () => {
  return (
    <Container>
      <Body>
        <Screen>
          <span>12x5</span>
        </Screen>
        
        <Keyboard />
      </Body>
    </Container>
  );
}

export default Calculator;