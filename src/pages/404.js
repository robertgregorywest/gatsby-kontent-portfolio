import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
import Title from 'components/title';

const NotFound = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        Not Found
      </Title>
    </Box>
    <Box>
      <p>The page you are looking for could not be found.</p>
    </Box>
  </Layout>
);

export default NotFound;
