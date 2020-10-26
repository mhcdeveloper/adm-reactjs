import React from 'react';

import { Container, Img } from './styles';
import { LOGO } from '../../assets/conts';

const Logo: React.FC = () => {
  return (
      <Container>
          <Img src={LOGO} />
      </Container>
  );
}

export default Logo;