import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import { lightTheme, darkTheme } from "styles/theme";

import Greeting from "components/Greeting/Greeting";
import JsxExplore from "components/JsxExplore/JsxExplore";
import LangSetup from "components/LangSetup/LangSetup";
import Form from "components/Form/Form";
import CounterClass from "components/Counter/CounterClass";

import { fetchDummyData } from "services/fetchDummyData";
import { getUserInfo } from "utils/userUtils";

const GetPost = lazy(() => import("components/Post/GetPost"));
const GetUser = lazy(() => import("components/User/GetUser"));

function App() {
  const [isDark, setIsDark] = useState(false);

  const user = {
    name: "Ayush",
    role: "SDT",
  };

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
        <Greeting message="React" />
        <JsxExplore name="Ayush" />
        <p>{userInfo}</p>
        <LangSetup lang="JavaScript" exp={2.5} />

        <h2>Async Fetch Example (Check Console)</h2>
        <button onClick={handleFetch}>Fetch Dummy Data</button>

        <Form />
        <CounterClass />

        <Suspense fallback={<p>Loading Posts...</p>}>
          <GetPost />
        </Suspense>

        <Suspense fallback={<p>Loading Users...</p>}>
          <GetUser />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
