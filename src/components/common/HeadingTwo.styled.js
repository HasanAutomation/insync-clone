import styled from 'styled-components';

export const HeadingTwo = styled.h2`
  color: ${({ color }) => (color ? color : '#fff')};
  font-size: ${({ size }) => (size ? size : '16px')};
  font-weight: 400;
  line-height: 1.5em;
  margin-top: 20px;
`;
