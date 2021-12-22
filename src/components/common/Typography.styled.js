import styled from 'styled-components';

export const Typography = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5em;
  letter-spacing: 1px;
  margin-top: 20px;
  color: ${({ color }) => (color ? color : '#108dcf')};
`;
