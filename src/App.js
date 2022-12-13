import { createGlobalStyle } from "styled-components";

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
}

img, picture, svg, video {
  display: block;
  max-width: 100%;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
