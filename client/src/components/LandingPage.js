<<<<<<< Updated upstream
import React from "react"
=======
import React from "react";
import styled from "styled-components";
import img from "../assets/bg.jpg";
import surf from "../assets/surf.jpg";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialYoutube,
} from "react-icons/ti";
>>>>>>> Stashed changes


const LandingPage=()=>{

return (

    <div>hello world</div>
)



<<<<<<< Updated upstream
=======
const Landing = styled.div`
  background-image: url(${img});
  background-size: cover;
  position: fixed;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    background-image: url(${surf});
  }
`;
>>>>>>> Stashed changes

}

export default LandingPage