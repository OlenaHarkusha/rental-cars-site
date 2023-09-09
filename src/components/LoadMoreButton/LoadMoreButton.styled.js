import styled from "styled-components";

export const LoadBtn = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  background-color: transparent;
  color: ${(p) => p.theme.colors.accent};
  text-decoration: underline;
  line-height: 24px;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentHover};
  }
`;
