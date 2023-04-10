import "./App.css";

import AppGlobalStyle from "./theme/AppGlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/AppTheme";

import Card from "./components/Card/Card";
import Button from "./components/Buttons/Button";
import TextButton from "./components/Buttons/TextButton";
import IconButton from "./components/Buttons/IconButton";

import { ReactComponent as EditIcon } from "./assets/icon-edit.svg";
import { ReactComponent as HomeIcon } from "./assets/icon-home.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppGlobalStyle />

      <Card>
        card
        <TextButton text="Add project" />
        <Button primary text="abc" />
        <Button text="def" as="a" />
        <IconButton label="Edit" onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton label="Home" onClick={() => {}}>
          <HomeIcon />
        </IconButton>
      </Card>
    </ThemeProvider>
  );
}

export default App;
