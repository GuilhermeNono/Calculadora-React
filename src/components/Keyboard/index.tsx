import React from 'react';

import { Container, Keys, Key,} from './styles';

const Keyboard: React.FC = () => {
  return (
      <Container>
          <Keys>
            <Key>AC</Key>
            <Key>+/-</Key>
            <Key>%</Key>
            <Key>APAGAR</Key>
            <Key>7</Key>
            <Key>8</Key>
            <Key>9</Key>
            <Key>x</Key>
            <Key>4</Key>
            <Key>5</Key>
            <Key>6</Key>
            <Key>-</Key>
            <Key>1</Key>
            <Key>2</Key>
            <Key>3</Key>
            <Key>+</Key>
            <Key>JUNTAR</Key>
            <Key>JUNTAR</Key>
            <Key>.</Key>
            <Key>=</Key>
          </Keys>
      </Container>
  );
}

export default Keyboard;