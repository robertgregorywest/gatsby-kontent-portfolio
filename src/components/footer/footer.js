import React from 'react';
import Box from 'components/box';
import { Copyright, SocialLink } from './footer.css';

const Footer = () => (

  <Box>
      <SocialLink href="mailto:mj@martinjennings.com" target="_blank"></SocialLink>
      <SocialLink href="https://twitter.com/mjenningssculpt" target="_blank" platform="twitter"></SocialLink>
      <Copyright>Copyright 2020 Martin Jennings. Made using <a href="https://kontent.ai">Kentico Kontent</a> and <a href="https://www.gatsbyjs.org/">GatsbyJS</a> by <a href="https://robwest.info">Rob West</a></Copyright>
  </Box>
);

export default Footer;