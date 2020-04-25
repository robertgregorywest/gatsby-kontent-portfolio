import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../styles/masonry.css';
import Gallery from 'components/gallery';
import Work from 'components/work';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.kontentItemHome.elements.intro.value}
      </Title>
    </Box>
    <Gallery>
      {data.kontentItemHome.elements.works.linked_items.map(({ elements: work }) => (
        <React.Fragment key={work.slug.value}>
          {work.assets.value.map(asset => (
            <Work key={asset.Name} slug={work.slug.value} title={work.title.value} fluid={asset.fluid} description={asset.description}/>
          ))}
        </React.Fragment>
      ))}
    </Gallery>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query {
    kontentItemHome {
      elements {
        intro {
          value
        }
        seo_metadata_example_to_include_in_any_type__meta_description {
          value
        }
        seo_metadata_example_to_include_in_any_type__meta_title {
          value
        }
        works {
          linked_items {
            ... on KontentItemWork {
              elements {
                slug {
                  value
                }
                title {
                  value
                }
                assets {
                  value {
                    fluid(maxWidth: 450) {
                      ...KontentAssetFluid
                    }
                    name
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
