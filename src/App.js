import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/navbar/Navbar";

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

function App() {
  const [theme, setTheme] = useState("light");
  const handleToggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <header>
          <Navbar onClick={handleToggleTheme} isLight={theme} />
        </header>
        <main></main>
      </ThemeProvider>
    </>
  );
}

export default App;
