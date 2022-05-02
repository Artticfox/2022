import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export const PrimaryButton = ({ children, to }: any) => {
  return (
    <Link to={to}>
      <Container>{children}</Container>
    </Link>
  );
};

const Container = styled.div`
  display: grid;
  color: ${(props: any) => props.theme.colors.nav.content};
  background-color: ${(props: any) => props.theme.colors.nav.background};
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
`;
