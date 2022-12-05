import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  border-radius-top: 4px;
  text-decoration: none;
  color: black;

  &:first-child {
    margin-right: 20px;
  }

  &.active {
    background-color: #4165bf;
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
  height: 60px;
  background-color: #4e51d4;
  padding: 0 25px;
`;

export const Container = styled.div`
  padding: 5px 15px;
`;
