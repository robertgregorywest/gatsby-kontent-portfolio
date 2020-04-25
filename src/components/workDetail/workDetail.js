import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, ImageContainer, Caption, Description } from './workDetail.css';

const WorkDetail = ({ fluid, description }) => (
  <Container>
    <figure>
      <ImageContainer>
        <Img fluid={fluid} alt={description} />
      </ImageContainer>
      <Caption>
        <Description>{description}</Description>
      </Caption>
    </figure>
  </Container>
);

WorkDetail.propTypes = {
  fluid: PropTypes.object.isRequired,
  description: PropTypes.string,
};

export default WorkDetail;