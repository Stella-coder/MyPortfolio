import React from "react";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderN = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <Logo
          onClick={() => {
            scroll.scrollToBottom();
          }}
        >
          <img src="pics/m.png" />
          STELLA
        </Logo>
        <Wrapper>
          <Link
            offset={10}
            activeClass="active"
            to="body"
            smooth={true}
            duration={1000}
          >
            <span>Home</span>
          </Link>
          <Link
            offset={10}
            activeClass="active"
            to="about"
            smooth={true}
            duration={1000}
          >
            <span>About</span>
          </Link>

          <Link
            offset={10}
            activeClass="active"
            to="project"
            smooth={true}
            duration={1000}
          >
            <span>Project</span>
          </Link>
          <Link
            offset={10}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={1000}
          >
            <span>Contact</span>
          </Link>
        </Wrapper>
        <Menu onClick={toggle}>
          <AiOutlineMenu />
        </Menu>
      </Container>
      {show ? (
        <Contain>
          <MenuWrapper>
            <span onClick={toggle}> X</span>
            <Link
              offset={10}
              activeClass="active"
              to="body"
              smooth={true}
              duration={1000}
            >
              <span onClick={toggle}>Home</span>
            </Link>
            <Link
              offset={10}
              activeClass="active"
              to="about"
              smooth={true}
              duration={1000}
            >
              <span onClick={toggle}>About</span>
            </Link>

            <Link
              offset={10}
              activeClass="active"
              to="project"
              smooth={true}
              duration={1000}
            >
              <span onClick={toggle}>Project</span>
            </Link>
            <Link
              offset={10}
              activeClass="active"
              to="contact"
              smooth={true}
              duration={1000}
            >
              <span onClick={toggle}>Contact</span>
            </Link>
          </MenuWrapper>
        </Contain>
      ) : null}
    </>
  );
};

export default HeaderN;

const Contain = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transition: 0.4s ease-in-out;
`;

const MenuWrapper = styled.div`
  height: 50%;
  width: 50%;
  background-color: orangered;
  border-radius: 0px 0px 0px 10px;
  position: fixed;
  display: flex;
  float: right;
  transition: all 350ms;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 1;

  span {
    cursor: pointer;
    color: white;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;

const Menu = styled.div`
  cursor: pointer;
  color: white;
  margin-right: 50px;
  font-size: 25px;
  color: orange;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 80px;
  width: 99vw;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid gray;
  //background-color: blueviolet;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
`;
const Logo = styled.div`
  font-weight: bold;
  margin-left: 50px;
  color: orange;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  img {
    height: 50px;
    width: 50px;
    border-radius: 30px;
    object-fit: cover;
    border: 2px solid white;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    img {
      height: 35px;
      width: 35px;
      border-radius: 20px;
      object-fit: cover;
      border: 1px solid white;
    }
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  margin-right: 50px;
  span {
    margin: 20px;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
