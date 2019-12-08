import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ elements : { title, description, image } }) => (
  <figure>
    <img src={image.value[0].url + "?h=500"} alt={title.value} />
    <figcaption>
      <Title>{title.value}</Title>
      <Copy>{description.value}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
   title: PropTypes.object.isRequired,
   description: PropTypes.object.isRequired,
   image: PropTypes.object.isRequired
};

export default Item;
