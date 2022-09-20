import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export const ProjectCard = ({ project }: any) => {
  return (
    <Container
      image={project.projectImage?.image.asset.url}
      left={Math.random() * (24 - 48) + 24}
      top={Math.random() * (0 - 100) + 100}
    >
      <GatsbyImage
        image={project.projectImage?.image.asset.gatsbyImageData}
        alt={project.projectImage?.alt}
      />
      <Content>
        <Industry>{project.industry}</Industry>
        <Title>{project.title}</Title>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ image: string; left: number; top: number }>`
  display: grid;
  width: 100%;
  position: relative;
  align-items: end;
  align-content: end;

  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.1);
  /* @media (min-width: 768px) {
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
  } */
`;

const Content = styled.div`
  display: grid;
  padding: 1.5rem;
  /* background-color: rgba(0, 0, 0, 0.75); */
  gap: 0.25rem;
`;

const Title = styled.h3`
  display: grid;
  color: ${(props: any) => props.theme.colors.black};
`;

const Industry = styled.h6`
  display: grid;
  color: ${(props: any) => props.theme.colors.text};
`;
