import "./App.scss";
import Companies from "./components/blocks/Companies/Companies";
import Header from "./components/blocks/Header/Header";
import MainHead from "./components/blocks/MainHead/MainHead";
import Purpose from "./components/blocks/Purpose/Purpose";
import ImageBack from "./components/elements/ImageBack/ImageBack";

function App() {
  return (
    <>
      <Header />
      <ImageBack src={"/src/assets/image/mainBack.png"} />

      <main>
        <MainHead />

        <Purpose />

        <Companies />
      </main>
    </>
  );
}

export default App;
