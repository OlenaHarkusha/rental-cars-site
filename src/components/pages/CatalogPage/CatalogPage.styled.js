import styled from "styled-components";
import { devices } from "../../constants/devices";

export const Container = styled.div`
  min-height: 100vh;
  padding: 75px 0;
  width: 100%;
  margin: 0 auto;

  @media ${devices.xs} {
    width: 320px;
  }

  @media ${devices.md} {
    width: 768px;
  }

  @media ${devices.xl} {
    padding: 100px 0 150px 0;
    width: 1280px;
  }
`;
