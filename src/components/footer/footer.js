import React from 'react';
import Box from 'components/box';
import { Copyright, SocialLink } from './footer.css';

const Footer = () => (
  <Box>
      <SocialLink href="mailto:mj@martinjennings.com" target="_blank" rel="noreferrer noopener"></SocialLink>
      <SocialLink href="https://twitter.com/mjenningssculpt" platform="twitter" target="_blank" rel="noreferrer noopener"></SocialLink>
      <Copyright>Copyright 2020 Martin Jennings. Made using <a href="https://kontent.ai" target="_blank" rel="noreferrer noopener">Kentico Kontent</a> and <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer noopener">GatsbyJS</a> by <a href="https://robwest.info" target="_blank" rel="noreferrer noopener">Rob West</a></Copyright>
  </Box>
);

export default Footer;