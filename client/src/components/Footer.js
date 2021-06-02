import React from "react";
import styled from "styled-components";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialYoutube,
} from "react-icons/ti"

const Footer = () => {
  return <Wrap><Foot>
       <Social>
        <a href="/#">
          <StyledTiSocialTwitter />
        </a>
        <a href="/#">
          <StyledTiSocialInstagram />
        </a>
        <a href="/#">
          <StyledTiSocialFacebook />
        </a>
        <a href="/#">
          <StyledTiSocialYoutube />
        </a>
      </Social></Foot></Wrap>;
};
const Foot = styled.div`
 width: 100vw;
  height: 5rem;
  background: #000;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  `

const Wrap = styled.div`

`;
const StyledTiSocialTwitter = styled(TiSocialTwitter)`
  width: 20px;
  height: 20px;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const StyledTiSocialInstagram = styled(TiSocialInstagram)`
  width: 20px;
  height: 20px;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const StyledTiSocialFacebook = styled(TiSocialFacebook)`
  width: 20px;
  height: 20px;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const StyledTiSocialYoutube = styled(TiSocialYoutube)`
  width: 20px;
  height: 20px;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Social = styled.div`
  width: 20vw;
  display: flex;
  bottom: 0;
  justify-content: space-around;
  padding: 10px;
`;

export default Footer;
