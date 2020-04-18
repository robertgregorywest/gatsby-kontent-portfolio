import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component'

import '../styles/masonry.css'

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.allKontentItemHome.nodes[0].elements.intro.value}
      </Title>
    </Box>
    <Masonry className="showcase">
      {data.allKontentItemSculpture.nodes.map(({ elements: work }) => (
        <div key={work.title} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <img src={`${work.image.value[0].url}?w=450`} alt={work.title.value} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                {work.title.value}
              </h6>
              <div className="card__description">
                <p>{work.description.value}</p>
              </div>
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
    allKontentItemHome {
      nodes {
        elements {
          intro {
            value
          }
        }
      }
    }
    allKontentItemSculpture {
      nodes {
        elements {
          title {
            value
          }
          description {
            value
          }
          image {
            value {
             url 
            }
          }
        }
      }
    }
  }
`;
