import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Biography</Link>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
