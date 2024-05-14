import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderInfo from "./components/HeaderInfo";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Powtarzalny from "./Pages/Powtarzalny";
import { gql } from "graphql-request";
import Cennik from "./Pages/Cennik";

const dyrekcjaQuery = gql`
  {
    dyrekcja123(first: 100) {
      opis
    }
  }
`;

const rodoOpis = gql`
  {
    rodo123(first: 100) {
      opis
    }
  }
`;

const historiaQuery = gql`
  {
    historia123(first: 100) {
      opis
    }
  }
`;

const kartaPrawQuery = gql`
  {
    kartaPraw123(first: 100) {
      opis
    }
  }
`;

const skargiWnioskiQuery = gql`
  {
    skargiWnioski123(first: 100) {
      opis
    }
  }
`;

const kontaktQuery = gql`
  {
    kontakt123(first: 100) {
      opis
    }
  }
`;

const opiekaCalodobowaQuery = gql`
  {
    opiekaCalodobowa123(first: 100) {
      opis
    }
  }
`;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex-col ">
        <HeaderInfo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route
            path="/historia"
            element={
              <Powtarzalny
                query={historiaQuery}
                nameAPI="historia123"
                title={"Historia"}
              />
            }
          />
          <Route
            path="/dyrekcja"
            element={
              <Powtarzalny
                query={dyrekcjaQuery}
                nameAPI="dyrekcja123"
                title={"Dyrekcja"}
              />
            }
          />
          <Route
            path="/kartapraw"
            element={
              <Powtarzalny
                query={kartaPrawQuery}
                nameAPI="kartaPraw123"
                title={"Karta Praw"}
              />
            }
          />
          <Route
            path="/rodo"
            element={
              <Powtarzalny query={rodoOpis} nameAPI="rodo123" title={"Rodo"} />
            }
          />
          <Route
            path="/skargiiwnioski"
            element={
              <Powtarzalny
                query={skargiWnioskiQuery}
                nameAPI="skargiWnioski123"
                title={"Skargi i wnioski"}
              />
            }
          />
          <Route
            path="/kontakt"
            element={
              <Powtarzalny
                query={kontaktQuery}
                nameAPI="kontakt123"
                title={"Kontakt"}
              />
            }
          />
          <Route
            path="/opiekacalodobowa"
            element={
              <Powtarzalny
                query={opiekaCalodobowaQuery}
                nameAPI="opiekaCalodobowa123"
                title={"Opieka Całodobowa"}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
