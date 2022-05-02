import { PortableText } from "@portabletext/react";
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/global/Layout";
import { Portable } from "../components/lib/Portable";
import { Icons } from "../lib/Icons";
import { Logos } from "../lib/Logos";

const About = ({ data }: any) => {
  const about = data.allSanityAbout.nodes[0];
  console.log(about);

  return (
    <Layout>
      <Container>
        <h1>Little bit About Us</h1>
        <div>
          <PortableText value={about.description} components={Portable} />
        </div>
        {/* <Img src={about.image.asset.url} /> */}

        <Sections>
          <Section>
            <TitleSection>
              <h2>Our Services</h2>
              <p>{about.descriptionServices}</p>
            </TitleSection>
            <SectionList>
              {about.services.map((service: any) => {
                return (
                  <Item key={service.id}>
                    <Icons services={service.slug.current} />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </Item>
                );
              })}
            </SectionList>
          </Section>

          <Section>
            <TitleSection>
              <h2>Our Partners</h2>
              <p>{about.descriptionPartners}</p>
            </TitleSection>
            <SectionList>
              {about.partners.map((partner: any) => {
                return (
                  <Item key={partner.id}>
                    <Logos logo={partner.slug.current} />
                    <h4>{partner.title}</h4>
                    <p>{partner.description}</p>
                  </Item>
                );
              })}
            </SectionList>
          </Section>
          <Section>
            <TitleSection>
              <h2>Our Process</h2>
              <p>{about.descriptionProcess}</p>
            </TitleSection>
            <SectionList>
              {about.process.map((process: any) => {
                return (
                  <Item key={process.id}>
                    <Icons services={process.slug.current} />
                    <h4>{process.title}</h4>
                    <p>{process.description}</p>
                  </Item>
                );
              })}
            </SectionList>
          </Section>
          <Section>
            <TitleSection>
              <h2>Software and Frameworks We Use</h2>
              <p>{about.descriptionSoftwares}</p>
            </TitleSection>
            <SectionList>
              {about.softwares.map((software: any) => {
                return (
                  <Item key={software.id}>
                    <Logos logo={software.slug.current} />
                    <h4>{software.title}</h4>
                    <p>{software.description}</p>
                  </Item>
                );
              })}
            </SectionList>
          </Section>
        </Sections>
      </Container>
    </Layout>
  );
};

const Img = styled.img`
  display: grid;
  width: 100%;
`;

const TitleSection = styled.div`
  display: grid;
  gap: 1rem;
`;

const Container = styled.div`
  display: grid;
  gap: 10rem;
  h4 {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Sections = styled.div`
  display: grid;
  gap: 10rem;
  @media (min-width: 768px) {
    section:nth-child(even) {
      margin-right: 12vw;
    }
    section:nth-child(odd) {
      margin-left: 12vw;
    }
  }
`;

const Item = styled.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`;

const Section = styled.section`
  display: grid;

  gap: 4rem;
`;

const SectionList = styled.div`
  display: grid;
  gap: 4rem;
  justify-content: stretch;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default About;

export const query = graphql`
  query About {
    allSanityAbout {
      nodes {
        id
        description {
          children {
            text
            marks
            _type
          }
          style
          _type
        }
        image {
          asset {
            url
          }
        }
        descriptionServices
        services {
          id
          title
          description
          order
          slug {
            current
          }
        }
        descriptionSoftwares
        softwares {
          id
          title
          description
          order
          slug {
            current
          }
        }
        descriptionProcess
        process {
          id
          title
          description
          order
          slug {
            current
          }
        }
        descriptionPartners
        partners {
          id
          title
          description
          order
          slug {
            current
          }
        }
      }
    }
  }
`;
