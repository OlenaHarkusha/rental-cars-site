import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../Images/x.svg";
import { devices } from "../constants/devices";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(p) => p.theme.colors.backdropBackground};
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  padding: 20px;
  padding-top: 40px;
  height: 85vh;
  overflow: scroll;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(p) => p.theme.radii.large};

  @media ${devices.md} {
    width: 541px;
    padding: 40px;
  }

  @media ${devices.xl} {
    overflow: auto;
    height: auto;
  }
`;

export const CloseModalIcon = styled(CloseIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Image = styled.img`
  border-radius: ${(p) => p.theme.radii.normal};
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  margin-bottom: 10px;
`;

export const AccentWrap = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 14px;

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
`;

export const Description = styled.p`
  line-height: 20px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
  line-height: 20px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  margin-bottom: 10px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Condition = styled.li`
  padding: 7px 14px;
  line-height: 18px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  background-color: ${(p) => p.theme.colors.inputBackground};
  border-radius: ${(p) => p.theme.radii.normal};
`;

export const RentalButton = styled.a`
  display: inline-block;
  padding: 12px 50px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.accentFont};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentHover};
  }
`;
