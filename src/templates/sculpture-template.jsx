import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';
import Img from 'gatsby-image';
import '../styles/sculpture.css';

const SculptureTemplate = ({ data }) => (
  <Layout>
    <Head
      pageTitle={
        data.kontentItemSculpture.elements.seo_metadata_example_to_include_in_any_type__meta_title.value
      }
      siteDescription={
        data.kontentItemSculpture.elements.seo_metadata_example_to_include_in_any_type__meta_description.value
      }
    />
    <Box>
        <Title as="h2" size="large">
        {data.kontentItemSculpture.elements.title.value}
        </Title>

        <figure className="sculpture">
            <Img fluid={data.kontentItemSculpture.elements.image.value[0].fluid} />
            <figcaption className="sculpture__caption">
                <p className="sculpture__description">{data.kontentItemSculpture.elements.description.value}</p>
            </figcaption>
        </figure>
    </Box>
  </Layout>
);

SculptureTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SculptureTemplate;

export const query = graphql`
  query SculptureBySlug($slug: String!) {
    kontentItemSculpture(elements: { slug: { value: { eq: $slug }}}) {
      elements {
        title {
          value
        }
        description {
          value
        }
        seo_metadata_example_to_include_in_any_type__meta_title {
          value
        }
        seo_metadata_example_to_include_in_any_type__meta_description {
          value
        }
        image {
            value {
                fluid(maxWidth: 1200) {
                  ...KontentAssetFluid
                }
            }
        }
      }
    }
  }
`;
