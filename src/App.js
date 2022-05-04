import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul class='navbar'>
          <li>
            <img src="./media/logo.jpg" alt="Imagen de un perrito" class='logo'/>
              </li>
          <li>
            <button class=" button mainButton">Nuevo Post</button>
          </li>
          <li>
            <div class="buscar">
              <input placeholder="Buscar una raza"/>
              <i class="fa-solid fa-magnifying-glass button iconobusqueda"></i>
            </div>
          </li>
          <li>
            <button class="button secondaryButton">Inicio de sesión</button>
          </li>
          <li>
            <button class="button mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
            <div class="breedTitle title">
                <h1>Razas de Perros</h1>
            </div>
            <ul class="breedCardContainer">
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/BorderCollie.avif" alt="Foto del border coli"/>
                    </div>
                    <span class="breedTitle">
                        Border Collie
                    </span>
                </li>
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/GermanSheaperd.avif" alt="Foto del border coli"/>
                    </div>
                    <span class="breedTitle">
                        German Sheaperd
                    </span>
                </li>
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/Rhodesian.jpg" alt="Foto del border coli"/>
                    </div>
                    <span class="breedTitle">
                        Rhodesian
                    </span>
                </li>
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/Doberman.jpg" alt="Foto del border coli"/>
                    </div>
                    <span class="breedTitle">
                        Doberman
                    </span>
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
