import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.allKontentItemHome.nodes[0].elements.intro.value}
      </Title>
    </Box>
    <Gallery items={data.allKontentItemSculpture.nodes} />
    {/* <div style={{ height: '50vh' }} />
    <IOExample /> */}
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
          description {
            value
          }
          image {
            value {
             url 
            }
          }
          title {
            value
          }
        }
      }
    }
  }
`;
