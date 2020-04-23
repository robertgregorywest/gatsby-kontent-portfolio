import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import '../styles/masonry.css';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.kontentItemHome.elements.intro.value}
      </Title>
    </Box>
    <Masonry className="showcase">
            {/* {data.kontentItemHome.elements.map(({ elements: work }) => ( */}
      {data.allKontentItemSculpture.nodes.map(({ elements: work }) => (
        <div key={work.title} className="showcase__item">
          <figure className="card">
            <Link to={`/sculpture/${work.slug.value}`} className="card__image">
              <Img fluid={work.image.value[0].fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">{work.title.value}</h6>
              <p className="card__description">{work.image.value[0].description}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
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
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
    allKontentItemSculpture(sort: {fields: system___lastModified, order: DESC}) {
      nodes {
        elements {
          title {
            value
          }
          image {
            value {
              fluid(maxWidth: 450) {
                ...KontentAssetFluid
              }
              description
            }
          }
          slug {
            value
          }
        }
      }
    }
  }
`;
