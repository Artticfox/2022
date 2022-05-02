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
import { Mail } from "../../assets/icons/mail";

export const Layout = ({ children }: any) => {
  const [mode, setMode] = useState(true);
  const [store, dispatch]: any = useReducer(SiteReducer, InitialState);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
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
          <LinkS to="/contact">
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
  padding: 64px 32px;
`;
