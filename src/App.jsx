import { createContext, useState } from "react";
import "./App.scss";

import Footer from "./components/blocks/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Blog from "./components/pages/Blog/Blog";
import Layout from "./components/Layout";
import News from "./components/pages/Blog/blocks/News/News";
import Video from "./components/pages/Blog/blocks/Video/Video";

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
            <Route path="blog" element={<Blog />}>
              <Route path="news" element={<News />} />
              <Route path="video" element={<Video />} />
            </Route>
          </Routes>
          <Footer />
        </Layout>
      </modalContext.Provider>
    </>
  );
}

export default App;
