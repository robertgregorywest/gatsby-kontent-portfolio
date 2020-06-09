const path = require('path');
const _ = require(`lodash`);
const Promise = require('bluebird')
const slash = require('slash')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workTemplate = path.resolve('./src/templates/workTemplate.jsx')

    graphql(`
    {
      allKontentItemWork {
        nodes {
          elements {
            slug {
              value
            }
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      _.each(result.data.allKontentItemWork.nodes, node => {
        createPage({
          path: `/work/${node.elements.slug.value}/`,
          component: slash(workTemplate),
          context: { slug: `${node.elements.slug.value}` },
        })
      })

      resolve()
    })
  })
}
