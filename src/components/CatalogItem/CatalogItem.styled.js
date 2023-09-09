import styled from "styled-components";
import { devices } from "../constants/devices";

export const Item = styled.li`
  position: relative;
  margin-bottom: 50px;

  @media ${devices.md} {
    height: 426px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100%;
    margin-bottom: 0;
  }
`;

export const CatalogImage = styled.img`
  margin-bottom: 14px;
  border-radius: ${(p) => p.theme.radii.normal};

  @media ${devices.md} {
    height: 268px;
    object-fit: cover;
  }
`;

export const FavButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  background: none;
  outline: none;
  border: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
`;

export const Title = styled.h2`
  font-size: inherit;
`;

export const ModelWrap = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 24px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 18px;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  color: ${(p) => p.theme.colors.secondaryFont};

  & li:not(:last-child)::after {
    content: "";

    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: ${(p) => p.theme.colors.secondaryFont};
    margin-left: 4px;

    vertical-align: middle;
  }

  @media ${devices.md} {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: auto;
  line-height: 20px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.accentFont};
  border: none;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.normal};
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accentHover};
  }
`;
