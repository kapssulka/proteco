import { createContext, useState } from "react";
import "./App.scss";

import Footer from "./components/blocks/Footer/Footer";
import Header from "./components/blocks/Header/Header";

import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Blog from "./components/pages/Blog/Blog";
import Layout from "./components/Layout";

export const modalContext = createContext(null);

function App() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <modalContext.Provider
        value={{ activeModal: activeModal, setActiveModal: setActiveModal }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/blog/*" element={<Blog />} />
          </Routes>
          <Footer />
        </Layout>
      </modalContext.Provider>
    </>
  );
}

export default App;
