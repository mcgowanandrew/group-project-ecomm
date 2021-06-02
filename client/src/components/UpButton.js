import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {FaChevronCircleUp } from "react-icons/fa";

const UpButton = ()=>{
    const [showScroll, setShowScroll] = useState(false);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behaviour: "smooth" });
      };
    
      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
          setShowScroll(false);
        }
      };
     
        window.addEventListener("scroll", checkScrollTop);


    return(

           <ChevUp onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>

    )
}
const ChevUp = styled(FaChevronCircleUp)`
 width: 2rem;
  height: auto;
  position:fixed;
  bottom:3rem;
  right:1rem;
  z-index:100;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  `;

export default UpButton