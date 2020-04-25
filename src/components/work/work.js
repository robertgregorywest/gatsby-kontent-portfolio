import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, StyledLink, Caption, Title, Description } from './work.css';

const Work = ({ slug, title, fluid, description }) => (
  <Container>
    <figure>
      <StyledLink to={`/work/${slug}`}>
        <Img fluid={fluid} />
      </StyledLink>
      <Caption>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Caption>
    </figure>
  </Container>
);

Work.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  fluid: PropTypes.object.isRequired,
  description: PropTypes.string,
};

export default Work;
