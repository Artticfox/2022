import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../assets/Logo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LinkS to="/" onClick={toggleClose}>
        <Logo />
      </LinkS>
      <Icon onClick={toggleMenu} />

      <Nav isOpen={isOpen}>
        <Link to="/#about" onClick={toggleClose}>
          Who we are
        </Link>
        <Link to="/#services" onClick={toggleClose}>
          What we do
        </Link>
        <Link to="/#process" onClick={toggleClose}>
          How we work
        </Link>
        <Link to="/#projects" onClick={toggleClose}>
          Our projects
        </Link>
        <Link to="/#partners" onClick={toggleClose}>
          Our partners
        </Link>
        <Link to="/#software" onClick={toggleClose}>
          What we use
        </Link>
        <Link to="/#contact" onClick={toggleClose}>
          Contact Us
        </Link>
      </Nav>
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

const Icon = styled.div`
  display: grid;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  background: ${(props) => props.theme.colors.accent};
  @media (min-width: 1140px) {
    display: none;
  }
`;

const Container = styled.header`
  display: grid;
  position: fixed;
  width: 100%;
  max-width: 100%;
  height: 96px;
  padding: 12px 16px;
  z-index: 100;
  grid-auto-flow: column;
  background: ${(props) => props.theme.colors.nav.background};
  align-items: center;
  align-content: center;
  justify-content: space-between;
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
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    font-weight: bold;
    font-family: ${(props) => props.theme.font.family.main};
    @media (max-width: 1140px) {
      font-size: 0.875rem;
    }
  }

  a:active {
    text-decoration: underline;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: grid;
  position: fixed;
  gap: 1rem;
  padding: 4rem;
  z-index: -10;
  width: 100%;
  top: ${(props) => (props.isOpen ? "96px" : "-100vh")};
  left: 0;
  background: ${(props) => props.theme.colors.nav.background};
  box-sizing: border-box;
  justify-content: center;
  justify-items: center;

  transition: top 0.5s ease-in-out;
  @media (min-width: 1140px) {
    grid-auto-flow: row;
    align-content: start;
    position: initial;
    padding: 0rem;
    justify-items: start;
    justify-content: start;
    padding-left: 40px;
  }
`;
