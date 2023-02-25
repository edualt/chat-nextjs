import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

interface GlobalStylesProps {
  theme: {
    fonts: {
      title: string,
      main: string
    },
    colors: {
      primary: string,
      background: string
    }
  }
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;