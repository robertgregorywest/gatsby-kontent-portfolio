import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

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
`;

export const ImageContainer = styled.div`
  display: block;
  position: relative;
`;

export const Caption = styled.figcaption`
  padding: 1rem;
`;

export const Description = styled.p`
  margin-bottom: 0;
  font-size: 1.5rem;
`;
