import Greeting from "components/Greeting/Greeting";
// import JsxExplore from "./components/jsxExplore";
import JsxExplore from "components/JsxExplore/JsxExplore";
import LangSetup from "components/LangSetup/LangSetup";
import Form from "components/Form/Form";
// import FormFormik from "components/FormFormik";
import CounterClass from "components/Counter/CounterClass";
import { fetchDummyData } from "services/fetchDummyData";
import { getUserInfo } from "utils/userUtils";
import GetPost from "components/Post/GetPost";
import GetUser from "components/User/GetUser";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { lightTheme, darkTheme } from "styles/theme";
import { useState } from "react";

function App() {

  const [isDark, setIsDark] = useState(false);

  const user = {
    name: "Ayush",
    role: "SDT"
  }

  const handleFetch = () => {
    fetchDummyData();
  };

  const userInfo = getUserInfo(user);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button onClick={() => setIsDark(prev => !prev)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="App">

        {/* <h1>Hello REact!</h1> */}
        <Greeting message="React" />
        <JsxExplore name="Ayush" />
        <p>{userInfo}</p>
        <LangSetup lang="JavaScript" exp={2.5} />
        <h2>Async Fetch Example (Check Console)</h2>
        <button onClick={handleFetch}>Fetch Dummy Data</button>
        <Form />
        {/* <FormFormik /> */}
        <CounterClass />
        <GetPost />
        <GetUser />
      </div >
    </ThemeProvider>
  );
}

export default App;
