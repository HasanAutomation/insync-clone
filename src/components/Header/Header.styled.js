import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Logo = styled.img`
  width: 150px;
  margin-right: auto;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const ListItem = styled.li`
  margin-right: 10px;

  a {
    text-decoration: none;
    color: #373131;
    padding: 10px;
    font-size: 14px;
  }
`;
