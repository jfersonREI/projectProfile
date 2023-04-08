//import "./App.css";
import AdminGlobalStyle from "./theme/AdminGlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/AdminTheme";

import Card from "./components/Card/Card";
import TextBtn from "./components/Buttons/TextBtn";
import IconBtn from "./components/Buttons/IconBtn";

import { ReactComponent as EditIcon } from "./assets/icon-edit.svg";
import { ReactComponent as HomeIcon } from "./assets/icon-home.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AdminGlobalStyle />
      <Card>
        card
        <TextBtn text="Add Faculty" />
        <IconBtn label="button" onClick={() => {}}>
          <EditIcon title="Edit" />
        </IconBtn>
        <IconBtn label="button" onClick={() => {}}>
          <HomeIcon title="Home" />
        </IconBtn>
      </Card>
    </ThemeProvider>
  );
}

export default App;
