import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  font-size: 16px;
  border-radius: 50px;
  padding: 15px 60px;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
  background-color: #95ca33;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  margin-right: 10px;

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
`;
