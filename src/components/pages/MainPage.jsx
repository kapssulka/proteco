import Brends from "../../components/blocks/Brends/Brends";
import Companies from "../../components/blocks/Companies/Companies";
import Contacts from "../../components/blocks/Contacts/Contacts";
import MainHead from "../../components/blocks/MainHead/MainHead";
import News from "../../components/blocks/News/News";
import Purpose from "../../components/blocks/Purpose/Purpose";
import YourPartner from "../../components/blocks/YourPartner/YourPartner";
import Header from "../blocks/Header/Header";

export default function MainPage() {
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

        <Contacts />
      </main>
    </>
  );
}
