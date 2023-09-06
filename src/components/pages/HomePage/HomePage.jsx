// import React from "react";

import { Box, Container, StyledLink, Text } from "./HomePage.styled";

export const HomePage = () => {
  return (
    <Box>
      <Container>
        <Text>Car rental at the best prices</Text>
        <StyledLink to={"/catalog"}>Show cars</StyledLink>
      </Container>
    </Box>
  );
};
