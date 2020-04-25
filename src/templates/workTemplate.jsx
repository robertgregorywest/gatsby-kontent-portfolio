import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';
import Gallery from 'components/gallery';
import WorkDetail from 'components/workDetail';

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

    <Gallery>
      {data.kontentItemWork.elements.assets.value.map(({ fluid, description }, id) => (
        <WorkDetail key={id} fluid={fluid} description={description}/>
      ))}
    </Gallery>
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
            fluid(maxWidth: 750) {
              ...KontentAssetFluid
            }
            description
          }
        }
      }
    }
  }
`;
