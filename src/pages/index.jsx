import CardRazasPerros from "components/CardRazasPerros";
import BorderCollie from "media/BorderCollie.avif";
import Rhodesian from "media/Rhodesian.jpg";
import GermanSheaperd from "media/GermanSheaperd.avif";
import Doberman from "media/Doberman.jpg";

function Index() {
  return (
    <section>
      <div className="breedTitle title">
        <h1>Razas de Perros</h1>
      </div>
      <ul className="breedCardContainer">
        <CardRazasPerros nombreRaza="Boder Collie" imagen={BorderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={Rhodesian} />
        <CardRazasPerros nombreRaza="German Sheaperd" imagen={GermanSheaperd} />
        <CardRazasPerros nombreRaza="Doberman" imagen={Doberman} />
      </ul>
    </section>
  );
}

export default Index;
