import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { Link } from 'gatsby';

export const Container = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  ${MEDIA.MIN_PHONE`
    box-sizing: border-box;
    float: left;
    padding-right: 1.5rem;
  `};

  ${MEDIA.MIN_TABLET`
    width: 50%;
  `};

  ${MEDIA.MIN_DESKTOP`
    width: 33.3%;
  `};

  ${MEDIA.MIN_ULTRA`
    width: 25%;
  `};
`;

export const Caption = styled.figcaption`
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  position: relative;
`;

export const Title = styled.h6`
  font-size: 1.75rem;
  margin-bottom: 0.8rem;
`;

export const Description = styled.p`
  margin-bottom: 0;
  font-size: 1.5rem;
`;
