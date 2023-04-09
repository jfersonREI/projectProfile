import AppGlobalStyle from "./theme/AppGlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/AppTheme";

import Card from "./components/Card/Card";
import TextBtn from "./components/Buttons/TextBtn";
import IconBtn from "./components/Buttons/IconBtn";

import { ReactComponent as EditIcon } from "./assets/icon-edit.svg";
import { ReactComponent as HomeIcon } from "./assets/icon-home.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppGlobalStyle />

      <Card>
        card
        <TextBtn text="Add Faculty" />
        <IconBtn label="Edit" onClick={() => {}}>
          <EditIcon />
        </IconBtn>
        <IconBtn label="Home" onClick={() => {}}>
          <HomeIcon />
        </IconBtn>
      </Card>
    </ThemeProvider>
  );
}

export default App;
