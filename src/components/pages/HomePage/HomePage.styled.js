import styled from "styled-components";
import { devices } from "../../constants/devices";
import { NavLink } from "react-router-dom";
import imageMobile from "../../../Images/damian-ochrymowicz-6IKzGvVcICI-unsplash-min.jpg";
import image from "../../../Images/why-kei-8e2gal_GIE8-unsplash-min.jpg";

export const Box = styled.div`
  min-height: 100vh;
  background-image: url(${imageMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${devices.md} {
    background-image: url(${image});
  }
`;

export const Container = styled.div`
  padding: 150px 10px 0 10px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${devices.xs} {
    width: 320px;
  }

  @media ${devices.md} {
    width: 768px;
  }

  @media ${devices.xl} {
    width: 1280px;
  }
`;

export const Text = styled.h1`
  color: ${(p) => p.theme.colors.mainFont};
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ffffff;

  @media ${devices.md} {
    font-size: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.mainFont};
  font-size: 24px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
  transition: transform 250ms ease-in-out;
  padding: 10px 20px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.normal};

  @media ${devices.md} {
    font-size: 32px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
