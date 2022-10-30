import React from "react";

import styled from "styled-components";
import { Layout } from "../components/global/Layout";
import { PortableText } from "@portabletext/react";
import { Portable } from "../components/lib/Portable";
import { GatsbyImage } from "gatsby-plugin-image";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Logos } from "../lib/Logos";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Video from "../components/elements/Video";
import Software from "../components/elements/Software";

const Project = ({ pageContext }: any) => {
  const content = pageContext.edge.node;

  return (
    <Layout title={content.title}>
      <Content>
        <Title>
          <h1>{content.client}</h1>
          <Row highlight>
            <Column>
              <Top>
                <H5>
                  <Light aria-describedby="label">Year:</Light> {content.year}
                </H5>

                <H5>
                  <Light aria-describedby="label">Industry:</Light>
                  {content.industry}
                </H5>
              </Top>
              {content.url && (
                <a href={content.url} target="_blank">
                  Check the website
                </a>
              )}
            </Column>
            <Column>
              <Ul>
                {content.services.map((service: any) => {
                  return <li key={service.id}>{service.title}</li>;
                })}
              </Ul>
            </Column>
          </Row>
        </Title>
        <Center>
          <h4>{content.sentence1}</h4>
        </Center>
        {content.images[0]?.image?.asset?.gatsbyImageData && (
          <GatsbyImage
            image={content.images[0].image.asset.gatsbyImageData}
            alt={content.images[0].alt}
          />
        )}
        {content.videos[0]?.video.public_id && (
          <Video
            publicID={content.videos[0].video.public_id}
            key={content.videos[0].video._key}
            description={content.videos[0].description}
            mobile={content.videos[0].mobile}
          />
        )}
        <Group>
          <Section>
            <h5>Challenge</h5>
            <PortableText value={content.challenge} components={Portable} />
          </Section>

          <Section>
            <h5>Concept</h5>
            <PortableText value={content.concept} components={Portable} />
          </Section>

          <Section>
            <h5>Solution</h5>
            <PortableText value={content.solution} components={Portable} />
          </Section>
        </Group>
        {content.images[1]?.image.asset?.gatsbyImageData && (
          <GatsbyImage
            image={content.images[1].image.asset?.gatsbyImageData}
            alt={content.images[1].alt}
          />
        )}
        {content.videos[1]?.video.public_id && (
          <Video
            publicID={content.videos[1].video.public_id}
            key={content.videos[1].video._key}
            description={content.videos[1].description}
            mobile={content.videos[1].mobile}
          />
        )}

        {content.sentence2 && (
          <Center>
            <h4>{content.sentence2}</h4>
          </Center>
        )}
        {content.images[2]?.image.asset?.gatsbyImageData && (
          <GatsbyImage
            image={content.images[2].image.asset?.gatsbyImageData}
            alt={content.images[2].alt}
          />
        )}
        {content.videos[2]?.video.public_id && (
          <Video
            publicID={content.videos[2].video.public_id}
            key={content.videos[2].video._key}
            description={content.videos[2].description}
            mobile={content.videos[2].mobile}
          />
        )}

        <SoftwareSection>
          <h5>What we have used</h5>
          <SoftwareUl>
            {content.softwares.map((software: any) => {
              return (
                <li key={software.id}>
                  <Software key={software.id} software={software} />
                </li>
              );
            })}
          </SoftwareUl>
        </SoftwareSection>
        {content.images.length > 3 &&
          content.images.slice(3).map((image: any) => {
            return (
              <GatsbyImage
                image={image.image.asset?.gatsbyImageData}
                alt={image.alt}
              />
            );
          })}
        {content.videos.length > 3 &&
          content.videos.slice(3).map((video: any) => {
            return (
              <Video
                publicID={video.video.public_id}
                key={video.video._key}
                description={video.description}
                mobile={video.mobile}
              />
            );
          })}
        <NavSection>
          <div>
            {pageContext.edge.previous && (
              <a href={pageContext.edge.previous.slug.current}>
                <ChevronLeft /> Prev
              </a>
            )}
          </div>
          {pageContext.edge.next && (
            <a href={pageContext.edge.next.slug.current}>
              Next <ChevronRight />
            </a>
          )}
        </NavSection>
      </Content>
    </Layout>
  );
};

const Content = styled.div`
  display: grid;
  gap: 3rem;
`;

const Row = styled.section<{ highlight?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2fr 1fr;
  padding: 1.5rem 2rem;
  gap: 1rem;
  background-color: ${(props) => (props.highlight ? "#f9fafa" : "transparent")};
`;

const Column = styled.div`
  display: grid;
  align-content: space-between;
  gap: 0.5rem;
  a {
    color: #000;
  }
`;

const Section = styled.section`
  display: grid;

  gap: 1rem;
  h6 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Group = styled.div`
  display: grid;
  gap: 3rem;
  justify-content: center;
`;
const Center = styled.section`
  text-align: center;
  justify-content: center;
  padding: 2rem;
`;

const NavSection = styled.section`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;

  a {
    color: #000;
    text-decoration: none;
    display: grid;
    grid-auto-flow: column;

    align-items: center;
  }
`;

const Top = styled.div`
  display: grid;
  align-items: start;
  gap: 0.5rem;
`;

const Title = styled.div`
  display: grid;
  gap: 1rem;
`;

const Light = styled.span`
  display: grid;
  font-weight: 300;
`;

const H5 = styled.h5`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 0.5rem;
`;

const Ul = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: grid;
    font-weight: 300;
  }
`;

const SoftwareSection = styled(Section)`
  display: grid;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0rem;
  h5 {
    justify-self: center;
  }
`;

const SoftwareUl = styled(Ul)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  justify-self: center;
  gap: 4rem;
  li {
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
    justify-content: start;
    align-items: center;
    svg {
      height: 40px;
      max-width: auto;
    }
  }
`;

export default Project;
