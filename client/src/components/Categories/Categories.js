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
import UpButton from "../UpButton"

const Categories = () => {
  return (
    <>
    <UpButton/>
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
  margin: 0 1rem 2rem;

`;
const Game = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${game});
  margin: 0 1rem 2rem;

`;

const Pet = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${pet});
  margin: 0 1rem 2rem;

`;

const Entertainment = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${ent});
  margin: 0 1rem 2rem;

`;
const Industrial = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${ind});
  margin: 0 1rem 2rem;

`;
const Medical = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: 30rem;
  background-image: url(${med});
  margin: 0 1rem 2rem;

`;

const Fitness = styled(NavLink)`
  border-radius: 1.5rem;
  text-decoration: none;
  background-size: cover;
  width: 30rem;
  height: auto;
  background-image: url(${fit});
  margin: 0 1rem 2rem;
`;

const CatgegoryWrap = styled.div`
/* width:100rem; */
  margin:4rem auto;
  display:flex;
  flex-flow: row wrap;
  /* align-content: center; */
  justify-content: center;
  /* display: grid;
  grid-template-columns: 30rem 35rem;
  gap: 3rem;
  justify-content: center;
  align-content: center; */
`;
export default Categories;
