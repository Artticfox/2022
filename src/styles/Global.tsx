import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    font-family: ${(props) => props.theme.font.family.body};
    background-color: ${(props) => props.theme.colors.background};
    font-weight: 400;
  line-height: 1.75;
  color: #000000;
  scroll-behavior: smooth;
  font-size: 16px;
  @media (min-width: 1920px) {
    font-size: 24px;
  }
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    line-height: 1.3;
    font-weight: 400;
  }


  p{
    font-size: 1rem;
    margin:0;
    max-width: 700px;
    color: ${(props: any) => props.theme.colors.text};

  }



  h1 {
  margin-top: 0;
  font-size: 2.6rem;
  font-weight: 700;
}

h2 {font-size: 1.725rem;
  font-weight: 700;}

h3 {font-size: 1.5rem;
font-weight: 700;}

h4 {font-size: 1.385rem;
font-weight: 700;}

h5 {font-size: 1.25rem;
font-weight: 600;}
h6{font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
}

small{font-size: 0.889rem;}
`;
