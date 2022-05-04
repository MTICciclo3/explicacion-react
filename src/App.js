import logo from "./logo.svg";
import "./styles/App.css";
import BorderCollie from './media/BorderCollie.avif';
import Rhodesian from './media/Rhodesian.jpg';
import GermanSheaperd from './media/GermanSheaperd.avif';
import Doberman from './media/Doberman.jpg';



function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <img
              src="./media/logo.jpg"
              alt="Imagen de un perrito"
              className="logo"
            />
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
            <li className="breedCard">
              <div className="contenedorImagen">
                <img
                  src={BorderCollie}
                  alt="Foto del border coli"
                />
              </div>
              <span className="breedTitle">Border Collie</span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img
                  src={GermanSheaperd}
                  alt="Foto del border coli"
                />
              </div>
              <span className="breedTitle">German Sheaperd</span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={Rhodesian} alt="Foto del border coli" />
              </div>
              <span className="breedTitle">Rhodesian</span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={Doberman} alt="Foto del border coli" />
              </div>
              <span className="breedTitle">Doberman</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
