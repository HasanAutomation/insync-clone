import styled from 'styled-components';

export const Image = styled.img`
  width: ${({ width }) => width};
  object-fit: cover;
  margin-left: 20px;
`;
