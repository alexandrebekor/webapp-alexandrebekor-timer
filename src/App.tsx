import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Hello World</p>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
