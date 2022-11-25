import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import API from "./components/API";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/docs" element={<API />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
