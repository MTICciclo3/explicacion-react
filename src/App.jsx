import logo from "./media/logo.jpg";
import "./styles/App.css";
import BorderCollie from "./media/BorderCollie.avif";
import Rhodesian from "./media/Rhodesian.jpg";
import GermanSheaperd from "./media/GermanSheaperd.avif";
import Doberman from "./media/Doberman.jpg";
import CardRazasPerros from "./components/CardRazasPerros";

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} alt="Imagen de un perrito" className="logo" />
          </li>
          <li>
            <button className=" button mainButton">+ Nuevo Post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza" />
              <i className="fa-solid fa-magnifying-glass button iconobusqueda"></i>
            </div>
          </li>
          <li>
            <button className="button secondaryButton">Inicio de sesión</button>
          </li>
          <li>
            <button className="button mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
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
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
