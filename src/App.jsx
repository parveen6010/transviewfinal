import "./App.css";
import HomePage from "./pages/HomePage";
import Main from "./pages/Main"
import { useState } from "react";
function App() {
  const [isLogin,setIsLogin]=useState(true);
  return (
   <div className="m-0 p-0">
    <Main />
   </div>
  );
}

export default App;


