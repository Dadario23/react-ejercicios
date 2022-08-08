import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Argentina</h3>
      <SelectList
        title="provincias"
        url="https://apis.datos.gob.ar/georef/api/provincias"
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://apis.datos.gob.ar/georef/api/municipios?provincia=${state}&max=135`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
