import Greeting from "components/Greeting";
// import JsxExplore from "./components/jsxExplore";
import JsxExplore from "components/JsxExplore";
import LangSetup from "components/LangSetup";
import Form from "components/Form";
// import FormFormik from "components/FormFormik";
import CounterClass from "components/CounterClass";
import { fetchDummyData } from "utils/fetchDummyData";
import { getUserInfo } from "utils/userUtils";
import GetPost from "components/GetPost";
import GetUser from "components/GetUser";

function App() {

  const user = {
    name: "Ayush",
    role: "SDT"
  }

  const handleFetch = () => {
    fetchDummyData();
  };

  const userInfo = getUserInfo(user);

  return (
    <div className="App">

      {/* <h1>Hello REact!</h1> */}
      <Greeting message="React" />
      <JsxExplore name="Ayush" />
      <p>{userInfo}</p>
      <h2>Async Fetch Example</h2>
      <button onClick={handleFetch}>Fetch Dummy Data</button>

      <LangSetup lang="JavaScript" exp={2.5} />
      <Form />
      {/* <FormFormik /> */}
      <CounterClass />
      <GetPost />

      <GetUser />
    </div >
  );
}

export default App;
