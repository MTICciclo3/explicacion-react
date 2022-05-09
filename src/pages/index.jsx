import CardRazasPerros from "components/CardRazasPerros";
import BorderCollie from "media/BorderCollie.avif";
import Rhodesian from "media/Rhodesian.jpg";
import GermanSheaperd from "media/GermanSheaperd.avif";
import Doberman from "media/Doberman.jpg";
import Header from "components/Header";
import Footer from "components/Footer";

function Index() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="breedTitle title">
            <h1>Razas de Perros</h1>
          </div>
          <ul className="breedCardContainer">
            <CardRazasPerros nombreRaza="Boder Collie" imagen={BorderCollie} />
            <CardRazasPerros nombreRaza="Rhodesian" imagen={Rhodesian} />
            <CardRazasPerros
              nombreRaza="German Sheaperd"
              imagen={GermanSheaperd}
            />
            <CardRazasPerros nombreRaza="Doberman" imagen={Doberman} />
          </ul>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
