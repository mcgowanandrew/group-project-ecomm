import React from "react";
import styled from "styled-components";
import img from "../assets/bg.jpg";
import surf from "../assets/surf.jpg"
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialYoutube,
} from "react-icons/ti";

const LandingPage = () => {
  return (
    <Landing>
      <Social>
        <a href="/">
          <StyledTiSocialTwitter />
        </a>
        <a href="/">
          <StyledTiSocialInstagram />
        </a>
        <a href="/">
          <StyledTiSocialFacebook />
        </a>
        <a href="/">
          <StyledTiSocialYoutube />
        </a>
      </Social>
    </Landing>
  );
};

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
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  padding: 10px;
`;

const Landing = styled.div`
  background-image: url(${img});
  background-size: cover;
  position:fixed;
 
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 890px) {
    background-image: url(${surf});
  }
`;

export default LandingPage;
