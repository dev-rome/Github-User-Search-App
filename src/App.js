import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/Search";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

body {
  min-height: 100vh;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
  background: ${(props) => props.theme.body};
  font-family: 'Space Mono', monospace;
;
}

img, picture, svg, video {
  display: block;
  max-width: 100%;
}
`;

const Container = styled.div`
  max-width: 45.625rem;
  margin-inline: auto;
  padding-inline: 1.5rem;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const handleToggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <header>
          <Container>
            <Navbar onClick={handleToggleTheme} isLight={theme} />
          </Container>
        </header>
        <main>
          <Container>
            <Search />
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
