import styled from 'styled-components';

export const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-block;
  width: 35px;
  height: 35px;
  vertical-align: middle;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: 40%;
  background-repeat: no-repeat;
  margin-bottom: 10px;
  margin-right: 10px;
  background-image: ${({ platform }) => () => {
    switch (platform) {
      case 'twitter':
        return 'url(https://cdn.rawgit.com/encharm/Font-Awesome-SVG-PNG/master/black/svg/twitter.svg);';
      default:
        return 'url(https://cdn.rawgit.com/encharm/Font-Awesome-SVG-PNG/master/black/svg/envelope.svg)';
    }
  }};
`;
