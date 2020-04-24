import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import '../styles/work.css';

const WorkTemplate = ({ data }) => (
  <Layout>
    <Head
      pageTitle={
        data.kontentItemWork.elements.seo_metadata_example_to_include_in_any_type__meta_title.value
      }
      siteDescription={
        data.kontentItemWork.elements.seo_metadata_example_to_include_in_any_type__meta_description.value
      }
    />
    <Box>
      <Title as="h2" size="large">
        {data.kontentItemWork.elements.title.value}
      </Title>
    </Box>

    <Masonry className="showcase">
      {data.kontentItemWork.elements.assets.value.map(({ fluid, description }, id) => (
        <div key={id} className="showcase__item">
          <figure className="card">
            <div className="card__image">
              <Img fluid={fluid} />
            </div>
            <figcaption className="card__caption">
              <p className="card__description">{description}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
);

WorkTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkTemplate;

export const query = graphql`
  query WorkBySlug($slug: String!) {
    kontentItemWork(elements: { slug: { value: { eq: $slug }}}) {
      elements {
        title {
          value
        }
        seo_metadata_example_to_include_in_any_type__meta_title {
          value
        }
        seo_metadata_example_to_include_in_any_type__meta_description {
          value
        }
        assets {
          value {
            fluid(maxWidth: 650) {
              ...KontentAssetFluid
            }
            description
          }
        }
      }
    }
  }
`;
