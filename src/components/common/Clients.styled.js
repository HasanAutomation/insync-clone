import styled from 'styled-components';

export const StyledClients = styled.section`
  width: 100%;
  color: ${({ color }) => (color ? color : 'black')};
  background-color: ${({ bg }) => (bg ? bg : '#fff')};
`;
