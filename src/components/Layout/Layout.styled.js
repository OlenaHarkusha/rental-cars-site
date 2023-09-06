import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../constants/devices";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 2px 7px 0px rgba(18, 20, 23, 0.2);
  /* display: flex; */
`;

export const Navigation = styled.nav`
  width: 320px;
  padding: 20px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media ${devices.md} {
    justify-content: space-between;
    align-items: center;

    width: 768px;
  }

  @media ${devices.xl} {
    width: 1280px;
  }
`;

export const NavBox = styled.div`
  display: none;

  @media ${devices.md} {
    display: flex;
    gap: 30px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.mainFont};
  font-size: 24px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    text-shadow: 0 0 10px #ffffff;
  }
`;
