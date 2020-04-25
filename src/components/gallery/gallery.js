import React from 'react';
import PropTypes from 'prop-types';
import { StyledMasonry } from './gallery.css';

const Gallery = ({ children }) => <StyledMasonry>{children}</StyledMasonry>;

Gallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Gallery;
