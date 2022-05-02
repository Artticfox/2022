import React from "react";
import styled from "styled-components";

export const ProjectCard = ({ project }: any) => {
  console.log(project.projectImage?.asset);

  return (
    <Container image={project.projectImage?.asset.url}>
      <Content>
        <Title>{project.title}</Title>
        <Industry>{project.industry}</Industry>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ image: string }>`
  display: grid;
  width: 100%;
  height: 40vh;
  min-height: 400px;
  align-items: end;
  align-content: end;
  background-image: url(${(props: any) => props.image});
  background-size: cover;
  background-position: center;
  /* box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.3); */
`;

const Content = styled.div`
  display: grid;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.75);
  gap: 0.25rem;
`;

const Title = styled.h4`
  display: grid;
  color: ${(props: any) => props.theme.colors.white};
`;

const Industry = styled.small`
  display: grid;
  color: ${(props: any) => props.theme.colors.white};
`;
