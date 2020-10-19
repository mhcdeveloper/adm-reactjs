import React from 'react';
import { IIcon } from './Icon.interface';

import { Container } from './styles';

const Icon: React.FC<IIcon> = ({ name, size, color }) => {
  return <Container className={name} size={size} color={color} />       
}

export default Icon;