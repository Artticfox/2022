import React, { useReducer, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { primaryTheme, secondaryTheme } from "../../styles/Theme";
import { GlobalStyle } from "../../styles/Global";
import {
  InitialState,
  SiteContext,
  SiteReducer,
} from "../../context/siteContext";
import { Header } from "./Header";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { Mail } from "../../assets/icons/Mail";

export const Layout = ({ children, title = "Home" }: any) => {
  const [mode, setMode] = useState(true);
  const [store, dispatch]: any = useReducer(SiteReducer, InitialState);

  return (
    <>
      <Helmet>
        <title>Artticfox - {title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SiteContext.Provider value={{ store, dispatch }}>
        <ThemeProvider theme={store.mode ? primaryTheme : secondaryTheme}>
          <GlobalStyle />
          <Container>
            <HeaderS>
              <Header />
            </HeaderS>

            <Main>{children}</Main>
          </Container>
          <LinkS to="/#contact">
            <Mail />
          </LinkS>
        </ThemeProvider>
      </SiteContext.Provider>
    </>
  );
};

const Container = styled.div`
  display: grid;
  gap: 32px;
  grid-auto-flow: row;

  grid-template-rows: min-content auto;
  @media (min-width: 1140px) {
    grid-template-rows: auto;
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
  }
`;

const HeaderS = styled.div`
  display: grid;

  height: 96px;
  @media (min-width: 1140px) {
    width: 30vw;
    max-width: 300px;
    height: 100%;
  }
`;

const LinkS = styled(Link)`
  display: grid;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: ${(props) => props.theme.colors.accent};
  border-radius: 50%;
`;

const Main = styled.main`
  display: grid;
  padding: 4rem 1.5rem;
  @media (min-width: 1140px) {
    padding: 4rem 4rem 10rem 2rem;
  }
`;
