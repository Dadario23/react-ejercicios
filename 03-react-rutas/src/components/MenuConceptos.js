import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces html (no recomendado):</span>
          <a href="/"> Home</a>
          <a href="/acerca"> Acerca</a>
          <a href="/contacto"> Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca"> Acerca</Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/no-existe"> Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            Conctacto
          </NavLink>
          <NavLink exact to="/no-existe" activeClassName="active">
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/usuario/jonmircha">jonmircha</Link>
          <Link to="/usuario/kenai">kEnAi</Link>
        </li>
        <li>
          <span>Parámentros de Consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

/* const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces html (no recomendado):</span>
          <a href="/"> Home</a>
          <a href="/acerca"> Acerca</a>
          <a href="/contacto"> Contacto</a>
        </li>
        <li>
          <span>Componente Link:</span>
          <Link to="/"> Home</Link>
          <Link to="/acerca"> Acerca</Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/no-existe"> Error 404</Link>
        </li>
        <li>
          <span>Parámetros:</span>
          <Link to="/usuario/dandrada23"> Dario Andrada</Link>
          <Link to="/usuario/sultan"> Sulti</Link>
        </li>
        <li>
          <span>Parámetros de Consulta:</span>
          <Link to="/productos"> Productos</Link>
        </li>
        <li>
          <span> Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas: </span>
          <Link to="/Login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
}; */

export default MenuConceptos;
