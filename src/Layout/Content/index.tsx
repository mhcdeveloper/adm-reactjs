import React from 'react';

import { Label } from '../../styles/Gstyles';
import Header from '../Header';
import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <Header />
      <Label>Content</Label>
    </Container>
  );
}

export default Content;