// import JsxExplore from "./components/jsxExplore";
import Greeting from "components/Greeting";
import JsxExplore from "components/JsxExplore";
import { getUserInfo } from "./utils/userUtils";
import { fetchDummyData } from "utils/fetchDummyData";

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
      <h1>Async Fetch Example</h1>
      <button onClick={handleFetch}>Fetch Dummy Data</button>
    </div >
  );
}

export default App;
