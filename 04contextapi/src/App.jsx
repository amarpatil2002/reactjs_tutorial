import { useState } from "react";
import './App.css'
import Contextprovider from "./Context/Contextprovider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Contextprovider>
        <h2>Context api in Reactjs</h2>
        <Login />
        <Profile />
      </Contextprovider>
    </>
  );
}

export default App;
