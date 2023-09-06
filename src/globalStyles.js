import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0px;
  font-family: 'Manrope', sans-serif;
  font-size: ${(p) => p.theme.fontSizes.s};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
font-family: 'Manrope', sans-serif;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}
button {
  cursor: pointer;
}
address {
  font-style: normal;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
}
`;
