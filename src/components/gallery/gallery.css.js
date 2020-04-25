import styled from 'styled-components';
import Masonry from 'react-masonry-component';

export const StyledMasonry = styled(Masonry)`
  margin: 0 4rem;

  &.is-loading {
    visibility: hidden;
  }
`;
