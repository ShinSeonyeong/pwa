import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Contect from "./pages/Contect";
import About from "./pages/About";
import User from "./pages/User";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user/:userId" element={<User />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
