import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Login from "./Screens/Login";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Login />
    </>
  );
}

export default App;
