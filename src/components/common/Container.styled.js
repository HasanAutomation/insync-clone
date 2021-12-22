import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  /* justify-content: center; */
`;
