import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    //console.log("Moviendo el Scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      //console.log("Fase de Montaje");
    };
  }, [scrollY]);

  useEffect(() => {
    //console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    //console.log("Fase de actualizacion");
  });

  useEffect(() => {
    return () => {
      //console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - use Effect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
