import styled from 'styled-components';

export const StyledCard = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  padding: 20px;
  background-color: ${({ highlighted, transparent }) =>
    highlighted ? '#1064e6' : transparent ? 'transparent' : '#fff'};
  border: ${({ transparent }) => transparent && '1px solid #3c4559'};

  img {
    width: 50px;
  }
`;
