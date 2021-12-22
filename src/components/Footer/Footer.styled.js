import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  color: #fff;
  padding: 100px 60px;

  ul {
    list-style: none;

    li {
      margin-bottom: 20px;
    }
  }
`;
