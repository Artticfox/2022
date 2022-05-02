import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/Logo";

export const Header = () => {
  return (
    <Container>
      <LinkS to="/">
        <Logo />
      </LinkS>
      <nav>
        <Link to="/#about">Who we are</Link>
        <Link to="/#services">What we do</Link>
        <Link to="/#process">How we work</Link>
        <Link to="/#projects">Our projects</Link>
        <Link to="/#partners">Our partners</Link>
        <Link to="/#software">What we use</Link>
        <Link to="/#contact">Contact Us</Link>
      </nav>
    </Container>
  );
};

const LinkS = styled(Link)`
  display: grid;
  width: fit-content;
  height: inherit;
  padding: 16px;
  box-sizing: border-box;
  @media (min-width: 1140px) {
    width: initial;
    height: fit-content;
    padding: 40px;
  }
`;

const Container = styled.header`
  display: grid;
  position: fixed;
  width: 100%;
  max-width: 100%;
  height: 96px;
  padding: 12px 16px;
  grid-auto-flow: column;
  background: ${(props) => props.theme.colors.nav.background};
  align-items: center;
  align-content: center;
  box-sizing: border-box;

  @media (min-width: 1140px) {
    width: 30vw;
    max-width: 300px;
    gap: 64px;
    grid-auto-flow: row;
    height: 100%;
    padding: 32px;
    align-content: start;
    box-sizing: border-box;
  }
  a {
    color: ${(props) => props.theme.colors.nav.content};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: ${(props) => props.theme.font.family.main};
    @media (max-width: 1140px) {
      font-size: 0.875rem;
    }
  }

  a:active {
    text-decoration: underline;
  }

  nav {
    display: grid;
    grid-auto-flow: row;
    gap: 16px;
    align-content: start;

    @media (max-width: 1140px) {
      grid-auto-flow: column;
      justify-content: center;
    }
  }
`;
