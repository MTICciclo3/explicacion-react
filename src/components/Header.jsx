import logo from "media/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="navbar">
        <li>
          <Link to="/">
            <img src={logo} alt="Imagen de un perrito" className="logo" />
          </Link>
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
  );
};

export default Header;

// function nombreFuncion () {
//    return "esto es una función"
//}

//const nombreFuncion = () => {
//    return "esto es una función asignada a una variable"
//}
