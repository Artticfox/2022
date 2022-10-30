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
  const homeContent = data.sanityHome;
  const about = data.sanityAbout;
  const contact = data.sanityContact;

  return (
    <Layout
      title={data.sanitySiteSettings.seo.title}
      description={data.sanitySiteSettings.seo.description}
    >
      <Container>
        <Message>
          <h1>{homeContent.title}</h1>
          <PortableText value={homeContent.text} components={Portable} />

          <PrimaryButton to="/#contact">{homeContent.buttonText}</PrimaryButton>
        </Message>

        <About id="about">
          <h2>{about.title}</h2>
          <PortableText value={about.description} components={Portable} />
        </About>

        <Section id="services">
          <TitleSection>
            <h2>{about.services.title}</h2>
            <p>{about.services.description}</p>
          </TitleSection>
          <SectionList>
            {about.services.list.map((item: any) => {
              return (
                <Item key={item.id}>
                  <Icons icon={item.slug.current} />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </Item>
              );
            })}
          </SectionList>
        </Section>

        <Section id="process">
          <TitleSection>
            <h2>{about.process.title}</h2>
            <p>{about.process.description}</p>
          </TitleSection>
          <SectionList>
            {about.process.list.map((item: any) => {
              return (
                <Item key={item.id}>
                  <Icons icon={item.slug.current} />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
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
            <h2>{about.partners.title}</h2>
            <p>{about.partners.description}</p>
          </TitleSection>
          <SectionList>
            {about.partners.list.map((item: any) => {
              return (
                <Item key={item.id}>
                  <Logos logo={item.slug.current} />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </Item>
              );
            })}
          </SectionList>
        </Section>

        <Section id="softwares">
          <TitleSection>
            <h2>{about.softwares.title}</h2>
            <p>{about.softwares.description}</p>
          </TitleSection>
          <SectionList>
            {about.softwares.list.map((item: any) => {
              return (
                <Item key={item.id}>
                  <Logos logo={item.slug.current} />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </Item>
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
  justify-self: center;
  align-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  padding: 32px 48px;
  width: fit-content;
  border-radius: 8px;
  gap: 16px;
  p {
    color: ${({ theme }) => theme.colors.background};
  }
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
    sanitySiteSettings {
      seo {
        title
        description
      }
    }
    sanityHome {
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
      buttonText
    }
    sanityAbout {
      id
      title
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
      softwares {
        title
        description
        list {
          title
          description
          slug {
            current
          }
        }
      }
      services {
        title
        description
        list {
          title
          description
          slug {
            current
          }
        }
      }
      process {
        title
        description
        list {
          title
          description
          slug {
            current
          }
        }
      }
      partners {
        title
        description
        list {
          title
          description
          slug {
            current
          }
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
    sanityContact {
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
`;
