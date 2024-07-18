import "./App.scss";
import Brends from "./components/blocks/Brends/Brends";
import Companies from "./components/blocks/Companies/Companies";
import Footer from "./components/blocks/Footer/Footer";
import Header from "./components/blocks/Header/Header";
import MainHead from "./components/blocks/MainHead/MainHead";
import News from "./components/blocks/News/News";
import Purpose from "./components/blocks/Purpose/Purpose";
import YourPartner from "./components/blocks/YourPartner/YourPartner";
import ImageBack from "./components/elements/ImageBack/ImageBack";

function App() {
  return (
    <>
      <Header />

      <main>
        <MainHead />

        <Purpose />

        <Companies />

        <Brends />

        <YourPartner />

        <News />
      </main>

      <Footer />
    </>
  );
}

export default App;
