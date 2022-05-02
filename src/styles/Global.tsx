import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    font-weight: 400;
  line-height: 1.75;
  color: #000000;
  scroll-behavior: smooth;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    line-height: 1.3;
    font-weight: 400;
  }


  p{

    margin:0;
    max-width: 700px;
    color: ${(props: any) => props.theme.colors.text};

  }



  h1 {
  margin-top: 0;
  font-size: 2.202rem;
  font-weight: 600;
}

h2 {font-size: 1.902rem;
  font-weight: 600;}

h3 {font-size: 1.424rem;
font-weight: 600;}

h4 {font-size: 1.266rem;
font-weight: 600;}

h5 {font-size: 1.125rem;}

small{font-size: 0.889rem;}
`;
