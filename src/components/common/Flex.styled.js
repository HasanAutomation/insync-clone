import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${({ start }) => (start ? 'flex-start' : 'center')};
  justify-content: center;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  padding: 20px;

  & > div,
  & > ul {
    flex: 1;
  }
`;
