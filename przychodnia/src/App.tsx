import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderInfo from "./components/HeaderInfo";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Powtarzalny from "./Pages/Powtarzalny";
import { gql } from "graphql-request";
import Cennik from "./Pages/Cennik";
import BadaniaProfilaktyczne from "./Pages/BadaniaProfilaktyczne";
import PoradniePoz from "./Pages/PoradniePOZ";
import PoradnieStomatologiczne from "./Pages/PoradnieStomatologiczne";
import PoradnieSpecjalistyczne from "./Pages/PoradnieSpecjalistyczne";
import PracowniaRehabilitacji from "./Pages/PracowniaRehabilitacji";
import PlikiDoPobrania from "./Pages/PlikiDoPobrania";
import MapGoogle from "./components/MapGoogle";
import Aktualnosci from "./Pages/Aktualnosci";

const dyrekcjaQuery = gql`
  {
    dyrekcja123 {
      opis
      id
    }
  }
`;

const rodoOpis = gql`
  {
    rodo123 {
      opis
      id
    }
  }
`;

const historiaQuery = gql`
  {
    historia123 {
      opis
      id
    }
  }
`;

const kartaPrawQuery = gql`
  {
    kartaPraw123 {
      opis
      id
    }
  }
`;

const skargiWnioskiQuery = gql`
  {
    skargiWnioski123 {
      opis
      id
    }
  }
`;

const kontaktQuery = gql`
  {
    kontakt123 {
      opis
      id
    }
  }
`;

const opiekaCalodobowaQuery = gql`
  {
    opiekaCalodobowa123 {
      opis
      id
    }
  }
`;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex-col">
        <HeaderInfo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Przekierowanie na stronę główną dla wszystkich innych ścieżek */}
          <Route path="/*" element={<Home />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/plikidopobrania" element={<PlikiDoPobrania />} />
          <Route
            path="/badaniaprofilaktyczne"
            element={<BadaniaProfilaktyczne />}
          />
          <Route path="/poradniepoz" element={<PoradniePoz />} />
          <Route
            path="/poradniestomatologiczne"
            element={<PoradnieStomatologiczne />}
          />
          <Route
            path="/poradniespecjalistyczne"
            element={<PoradnieSpecjalistyczne />}
          />
          <Route
            path="/pracowniarehabilitacji"
            element={<PracowniaRehabilitacji />}
          />
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
          <Route path="/aktualnosci" element={<Aktualnosci />} />

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
                title={"Karta Praw Pacjenta"}
              />
            }
          />
          <Route
            path="/rodo"
            element={
              <Powtarzalny query={rodoOpis} nameAPI="rodo123" title={"RODO"} />
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
              <>
                <Powtarzalny
                  query={kontaktQuery}
                  nameAPI="kontakt123"
                  title={"Kontakt"}
                />
                <MapGoogle />
              </>
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
