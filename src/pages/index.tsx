import { PortableText } from "@portabletext/react";
import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/elements/Button";
import { ProjectCard } from "../components/elements/ProjectCard";
import { Form } from "../components/Form";
import { Layout } from "../components/global/Layout";
import { Portable } from "../components/lib/Portable";
import { Icons } from "../lib/Icons";
import { Logos } from "../lib/Logos";

const IndexPage = ({ data }: any) => {
  console.log(process.env.SANITY_TOKEN);

  const homeContent = data.allSanityHome.nodes[0];
  const about = data.allSanityAbout.nodes[0];

  console.log(homeContent.text);

  return (
    <Layout>
      <Container>
        <Message>
          <h1>{homeContent.title}</h1>
          <PortableText value={homeContent.text} components={Portable} />

          <PrimaryButton to="/about">Get a Quote</PrimaryButton>
        </Message>

        <About id="about">
          <PortableText value={about.description} components={Portable} />
        </About>

        <Sections>
          <Section id="services">
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

          <Section id="process">
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
        </Sections>

        <Projects id="projects">
          {data?.allSanityProjects.nodes.map((project: any) => {
            return (
              <Link to={`/project/${project.slug.current}`} key={project.id}>
                <ProjectCard project={project} />
              </Link>
            );
          })}
        </Projects>

        <Sections>
          <Section id="partners">
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

          <Section id="software">
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
          <Contact id="contact">
            <h2>Contact Us</h2>
            <Form />
          </Contact>
        </Sections>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const Message = styled.section`
  display: grid;
  min-height: 60vh;
  padding: 0 2rem;
  padding-top: 5rem;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
`;

const About = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
`;

const Projects = styled.section`
  display: grid;
  padding-top: 5rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  a:nth-child(even) {
    margin-top: 1.5rem;
  }
  a,
  a:visited {
    text-decoration: none;
  }
`;

const TitleSection = styled.div`
  display: grid;
  gap: 1rem;
`;

const Container = styled.div`
  display: grid;
  gap: 5rem;
`;

const Sections = styled.div`
  display: grid;
  gap: 5rem;
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
  padding-top: 5rem;
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

const Contact = styled.section`
  padding-top: 5rem;
  display: grid;
  gap: 4rem;
`;

export const query = graphql`
  query Projects {
    allSanityHome {
      nodes {
        title
        text {
          children {
            text
            marks
            _type
          }
          style
          _type
        }
      }
    }
    allSanityProjects(sort: { fields: order }) {
      nodes {
        id
        title
        industry
        url
        order
        slug {
          current
        }
        projectImage {
          asset {
            url
          }
        }
      }
    }
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
