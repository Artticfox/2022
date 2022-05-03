import React from "react";

import { graphql } from "gatsby";

import styled from "styled-components";
import { Layout } from "../components/global/Layout";

const Project = ({ data }: any) => {
  console.log(data.sanityProjects.title);
  const thisEdge = data.allSanityProjects.edges.find((edge: any) => {
    console.log(edge);
    edge.node.id === data.id;
  });

  return (
    <Layout title={data.sanityProjects.title}>
      <h1>{data.sanityProjects.title}</h1>
    </Layout>
  );
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
      title
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
