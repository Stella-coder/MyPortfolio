import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <Aboutme>About me</Aboutme>
      <A>
        <Image src="pics/m.png" />

        <TextHolder>
          <span>
            I am Sani Stella, a creative thinker, a web and software developer
            and a UI/UX developer. An intern at codelab and a 300 level student
            of Computer Science.
            <p>
              Works with a team of great developers at codelab, we build the
              product you need on time with an experience team that use a clear
              and effective process, we carry more than just coding skills our
              values makes us stand out from others.
            </p>
            <p>
              We also train and mentor young ones to be outstanding in the tech
              space as technology is the future.
            </p>
          </span>
        </TextHolder>
      </A>
    </Container>
  );
};

export default About;

const Aboutme = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;

const A = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 798px) {
    width: 100%;
    justify-content: center;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  // background-color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  border: 2px dashed orange;
  height: 400px;
  width: 500px;
  margin-top: 100px;
  object-fit: contain;
  margin-right: 50px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 280px;
    width: 280px;
    object-fit: contain;
    margin-top: 10px;
    margin-right: 0px;
  }
`;
const TextHolder = styled.div`
  height: 400px;
  width: 400px;
  margin-top: 50px;
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    width: 80%;
    object-fit: contain;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 100%;
  }
`;
