import "./App.scss";
import Header from "./components/blocks/Header/Header";
import MainHead from "./components/blocks/MainHead/MainHead";
import Purpose from "./components/blocks/Purpose/Purpose";

function App() {
  return (
    <>
      <Header />
      <div className="background-img">
        <img src="/src/assets/image/mainBack.png" alt="" />
      </div>

      <main className="container">
        <MainHead />

        <Purpose />
      </main>
    </>
  );
}

export default App;
