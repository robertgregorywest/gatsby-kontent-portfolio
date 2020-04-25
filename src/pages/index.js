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
      {data.kontentItemHome.elements.works.linked_items.map(({ elements: work }) => (
        <React.Fragment key={work.slug.value}>
          {work.assets.value.map(asset => (
            <div key={asset.name} className="showcase__item">
              <figure className="card">
                <Link to={`/work/${work.slug.value}`} className="card__image">
                  <Img fluid={asset.fluid} />
                </Link>
                <figcaption className="card__caption">
                  <h6 className="card__title">{work.title.value}</h6>
                  <p className="card__description">{asset.description}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </React.Fragment>
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
