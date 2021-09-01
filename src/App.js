import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import HeaderN from "./components/HeaderN";
import Project from "./components/Project";
import Contact from "./components/Contact";

const GlobalStyled = createGlobalStyle`
 body{
   background-color: ${({ theme }) =>
     theme.myTheme === "dark" ? "black" : "white"};
   color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "gray")};
   }`;

const App = () => {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toogle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "dark" };
  };
  const [toogle, setToogle] = useState(storeThemeChoice);

  React.useEffect(() => {
    storage.setItem("toogle", JSON.stringify(toogle));
  }, [toogle]);

  return (
    <ThemeProvider theme={toogle}>
      <GlobalStyled />
      <Container>
        <HeaderN />
        <Home />
        <About />
        <Project
          bclr={() => {
            setToogle(
              toogle.myTheme === "dark" ? { myTheme: "y" } : { myTheme: "dark" }
            );
          }}
        />
        <Contact />
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
