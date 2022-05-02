const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProjects {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allSanityProjects.nodes.forEach((node) => {
    createPage({
      path: `/project/${node.slug.current}`,
      component: path.resolve("./src/templates/project.tsx"),
      context: { product: node },
    });
  });
};
