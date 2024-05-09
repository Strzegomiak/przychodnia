import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderInfo from "./components/HeaderInfo";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Historia from "./Pages/Historia";
import Dyrekcja from "./Pages/Dyrekcja";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderInfo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/dyrekcja" element={<Dyrekcja />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
