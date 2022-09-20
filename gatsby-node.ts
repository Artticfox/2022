const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProjects(sort: { fields: order }) {
        edges {
          node {
            id
            client
            title
            year
            excerpt
            industry
            concept {
              children {
                text
                marks
                _type
              }
              style
              _type
            }
            challenge {
              children {
                text
                marks
                _type
              }
              style
              _type
            }
            solution {
              children {
                text
                marks
                _type
              }
              style
              _type
            }

            images {
              alt
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
              }
            }

            projectImage {
              alt
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
              }
            }
            sentence1
            sentence2
            url

            services {
              id
              title
            }
            softwares {
              id
              title
              slug {
                current
              }
            }
            videos {
              video {
                public_id
                _key
              }
              description
              mobile
            }
            slug {
              current
            }
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
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allSanityProjects.edges.forEach((edge) => {
    createPage({
      path: `/project/${edge.node.slug.current}`,
      component: path.resolve("./src/templates/project.tsx"),
      context: { edge },
    });
  });
};
