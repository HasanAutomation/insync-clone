import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ color }) => (color ? color : '#fff')};
  font-size: ${({ size }) => (size ? size : '60px')};
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.1em;
`;
