import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';

const Biography = ({ data }) => (
  <Layout>
    <Head
      pageTitle={
        data.kontentItemArticle.elements
          .seo_metadata_example_to_include_in_any_type__meta_title.value
      }
      siteDescription={
        data.kontentItemArticle.elements
          .seo_metadata_example_to_include_in_any_type__meta_description.value
      }
    />
    <Box>
      <Title as="h2" size="large">
        {data.kontentItemArticle.elements.title.value}
      </Title>
    </Box>
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.kontentItemArticle.elements.body.resolvedData.html,
        }}
      />
    </Box>
  </Layout>
);

Biography.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Biography;

export const query = graphql`
  query BiographyQuery {
    kontentItemArticle(system: { codename: { eq: "biography" } }) {
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
        body {
          value
        }
      }
    }
  }
`;
