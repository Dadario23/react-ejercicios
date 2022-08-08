import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h2>React Router</h2>
      <a
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <ConceptosBasicos />
    </div>
  );
}

export default App;
