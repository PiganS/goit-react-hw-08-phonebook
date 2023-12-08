import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
  box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
`;

export const StyledNav = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #b6aaaa;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  padding: 15px;
`;

export const ButtonOut = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #d6cbcb;
  font-weight: 500;
  background-color: #857f7d;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const StyledTrendingTitle = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.945);
  box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);
`;
