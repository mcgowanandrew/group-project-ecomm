import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import fit from "../assets/fitness.jpg";
import life from "../assets/lifestyle.jpg";
import med from "../assets/medical.jpg";
import ent from "../assets/entertainment.jpg";
import ind from "../assets/ind.jpg";
import pet from "../assets/pet.jpg";
import game from "../assets/game.jpg";
import Footer from "../Footer";

const Categories = () => {
  return (
    <>
      <CatgegoryWrap>
        <Fitness to="/category/Fitness">
          <Dark>
            <H2>Fitness</H2>
          </Dark>
        </Fitness>
        <Lifestyle to="/category/Lifestyle">
          <Dark>
            <H2>Lifestyle</H2>
          </Dark>
        </Lifestyle>
        <Entertainment to="/category/Entertainment">
          <Dark>
            <H2>Entertainment</H2>
          </Dark>
        </Entertainment>
        <Industrial to="/category/Industrial">
          <Dark>
            <H2>Industrial</H2>
          </Dark>
        </Industrial>
        <Pet to="/category/Pets%20and%20Animals">
          <Dark>
            <H2>Pets and Animals</H2>
          </Dark>
        </Pet>
        <Game to="/category/Gaming">
          <Dark>
            <H2>Gaming</H2>
          </Dark>
        </Game>
        <Medical to="/category/Medical">
          <Dark>
            <H2>Medical</H2>
          </Dark>
        </Medical>
      </CatgegoryWrap>
      <Footer />
    </>
  );
};
const Dark = styled.div`
  border-radius: 1.5rem;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 30rem;
  height: 30rem;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    background: rgba(0, 0, 0, 0.8);

    transition: all 0.2s ease-in-out;
  }
`;
const H2 = styled.h2`
  color: #fff;
`;


const Lifestyle = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${life});
`;
const Game = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${game});
`;

const Pet = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${pet});
`;

const Entertainment = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${ent});
`;
const Industrial = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${ind});
`;
const Medical = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${med});
`;

const Fitness = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: auto;
  background-image: url(${fit});
`;

const CatgegoryWrap = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 30rem 35rem;
  gap: 3rem;
  justify-content: center;
  align-content: center;
`;
export default Categories;
