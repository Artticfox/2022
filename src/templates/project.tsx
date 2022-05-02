import React from "react";

import { graphql } from "gatsby";

import styled from "styled-components";
import { Layout } from "../components/global/Layout";

const Project = ({ data }: any) => {
  console.log(data);
  const thisEdge = data.allSanityProject.edges.find(
    ({ edge }: any) => edge.node.id === data.id
  );

  return <Layout title={data.title}></Layout>;
};

const Container = styled.div`
  display: grid;
  padding: 0 5vw 5vw;
`;

export default Project;

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    allSanityProjects {
      edges {
        node {
          id
        }
        next {
          slug {
            current
          }
          id
        }
        previous {
          id
          slug {
            current
          }
        }
      }
    }
    sanityProjects(id: { eq: $id }) {
      id
      client
      description
      excerpt
      images {
        alt
        image {
          asset {
            url
          }
        }
      }
      industry
      projectImage {
        asset {
          url
        }
      }
      sentence1
      sentence2
      url
      services {
        title
      }
      softwares {
        title
      }
    }
  }
`;
