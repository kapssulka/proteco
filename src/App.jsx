import { createContext, useState } from "react";
import "./App.scss";
import Brends from "./components/blocks/Brends/Brends";
import Companies from "./components/blocks/Companies/Companies";
import Contacts from "./components/blocks/Contacts/Contacts";
import Footer from "./components/blocks/Footer/Footer";
import Header from "./components/blocks/Header/Header";
import MainHead from "./components/blocks/MainHead/MainHead";
import News from "./components/blocks/News/News";
import Purpose from "./components/blocks/Purpose/Purpose";
import YourPartner from "./components/blocks/YourPartner/YourPartner";

export const modalContext = createContext(null);

function App() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <modalContext.Provider
        value={{ activeModal: activeModal, setActiveModal: setActiveModal }}
      >
        <Header />

        <main>
          <MainHead />

          <Purpose />

          <Companies />

          <Brends />

          <YourPartner />

          <News />

          <Contacts />
        </main>

        <Footer />
      </modalContext.Provider>
    </>
  );
}

export default App;
