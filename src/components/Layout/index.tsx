import React from 'react';

import { Container, Wrapper, Github} from './styles';
import Calculator from '../Calculator'

const Layout: React.FC = () => {
  return (
      <Container> 
          <Wrapper>
              <Calculator />

              <Github>
                  Github
              </Github>
          </Wrapper>
      </Container>
  );
}

export default Layout;