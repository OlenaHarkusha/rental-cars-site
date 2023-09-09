import Select from "react-select";
import styled from "styled-components";
import { devices } from "../constants/devices";

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.xs} {
    width: 320px;
    justify-content: center;
  }

  @media ${devices.md} {
    width: 768px;
  }

  @media ${devices.xl} {
    width: 1280px;
    flex-direction: row;
    gap: 18px;
    align-items: end;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrap = styled.span`
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.secondaryFont};
`;

export const SelectBrand = styled(Select)`
  width: 224px;
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mainFont};
  margin-bottom: 10px;
  &.react-select-container .react-select__control {
    border: none;
    background-color: ${(p) => p.theme.colors.inputBackground};
    border-radius: ${(p) => p.theme.radii.normal};
    .react-select__value-container {
      padding: 10px 18px;
      .react-select__placeholder {
        color: ${(p) => p.theme.colors.mainFont};
      }
    }
    .react-select__indicators {
      .react-select__indicator-separator {
        display: none;
      }
      .react-select__indicator {
        color: ${(p) => p.theme.colors.mainFont};
      }
    }
  }

  @media ${devices.md} {
    width: 320px;
  }
  @media ${devices.xl} {
    margin-bottom: 0;
  }
`;

export const SelectPrice = styled(Select)`
  width: 224px;
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mainFont};
  margin-bottom: 10px;
  &.react-select-container .react-select__control {
    border: none;
    background-color: ${(p) => p.theme.colors.inputBackground};
    border-radius: ${(p) => p.theme.radii.normal};
    .react-select__value-container {
      padding: 10px 18px;
      .react-select__placeholder {
        color: ${(p) => p.theme.colors.mainFont};
      }
    }
    .react-select__indicators {
      .react-select__indicator-separator {
        display: none;
      }
      .react-select__indicator {
        color: ${(p) => p.theme.colors.mainFont};
      }
    }
  }
  &.react-select-container .react-select__control--is-focused {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }

  @media ${devices.md} {
    width: 320px;
  }
  @media ${devices.xl} {
    margin-bottom: 0;
  }
`;

export const MileageWrapper = styled.div`
  position: relative;

  @media ${devices.md} {
    &:first-child input {
      border-top-left-radius: ${(p) => p.theme.radii.normal};
      border-bottom-left-radius: ${(p) => p.theme.radii.normal};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 1px solid #1214171a;
    }

    &:last-child input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: ${(p) => p.theme.radii.normal};
      border-bottom-right-radius: ${(p) => p.theme.radii.normal};
    }
  }
`;
export const ExtraWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.md} {
    flex-direction: row;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 14px;
  left: 24px;
  line-height: 20px;
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mainFont};
`;

export const Input = styled.input`
  width: 224px;
  padding: 14px 24px 14px 75px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mainFont};
  border: none;
  background-color: ${(p) => p.theme.colors.inputBackground};
  border-radius: ${(p) => p.theme.radii.normal};

  @media ${devices.md} {
    width: 160px;
  }

  &:focus {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
  @media ${devices.xl} {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  width: 224px;
  padding: 14px 44px;
  line-height: 20px;
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.accentFont};
  border: none;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.normal};
  transition: background-color ease-in-out 250ms;

  @media ${devices.md} {
    width: auto;
  }
  &:focus,
  &:hover {
    outline: 1px solid ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.accentHover};
  }
`;
