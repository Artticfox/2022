import { PortableText } from "@portabletext/react";
import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/elements/Button";
import { ProjectCard } from "../components/elements/ProjectCard";
import Software from "../components/elements/Software";
import { Form } from "../components/Form";
import { Layout } from "../components/global/Layout";
import { Portable } from "../components/lib/Portable";
import { Icons } from "../lib/Icons";
import { Logos } from "../lib/Logos";

const IndexPage = ({ data }: any) => {
  console.log(process.env.SANITY_TOKEN);

  const homeContent = data.allSanityHome.nodes[0];
  const about = data.allSanityAbout.nodes[0];
  const contact = data.allSanityContact.nodes[0];

  console.log(homeContent.text);

  return (
    <Layout>
      <Container>
        <Message>
          <h1>{homeContent.title}</h1>
          <PortableText value={homeContent.text} components={Portable} />

          <PrimaryButton to="/#contact">Get a Quote</PrimaryButton>
        </Message>

        <About id="about">
          <PortableText value={about.description} components={Portable} />
        </About>

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
                  <h6>{service.title}</h6>
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
                  <h6>{process.title}</h6>
                  <p>{process.description}</p>
                </Item>
              );
            })}
          </SectionList>
        </Section>

        <Section>
          <h2>Our Projects</h2>
          <Projects id="projects">
            {data?.allSanityProjects.nodes.map((project: any) => {
              return (
                <Link to={`/project/${project.slug.current}`} key={project.id}>
                  <ProjectCard project={project} />
                </Link>
              );
            })}
          </Projects>
        </Section>

        <Section id="partners">
          <TitleSection>
            <h2>Our Partners</h2>
            <p>{about.descriptionPartners}</p>
          </TitleSection>
          <SectionList>
            {about.partners.map((partner: any) => {
              console.log(partner);

              return (
                <Software key={partner.id} software={partner} description />
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
                <Software key={software.id} software={software} description />
              );
            })}
          </SectionList>
        </Section>
        <Contact id="contact">
          <h2>{contact.title}</h2>
          <div>
            <PortableText value={contact.text} components={Portable} />
          </div>
          <Row>
            <Form />
          </Row>
        </Contact>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const Message = styled.section`
  display: grid;
  min-height: 60vh;
  padding: 0rem;

  gap: 2rem;
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
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

  gap: 2rem;
  @media (min-width: 768px) {
    gap: 4.5rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  /* a:nth-child(even) {
    margin-top: 3.5rem;
  } */
  a,
  a:visited {
    text-decoration: none;
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 7rem;
  }
`;

const TitleSection = styled.div`
  display: grid;
  gap: 1rem;
`;

const Container = styled.div`
  display: grid;
  gap: 8rem;
  @media (min-width: 768px) {
    gap: 16rem;
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
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;

const Contact = styled.section`
  padding-top: 8rem;
  display: grid;
  gap: 4rem;
`;

const Row = styled.div`
  display: grid;
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
        order
        slug {
          current
        }
        projectImage {
          alt
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
    allSanityContact {
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
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
