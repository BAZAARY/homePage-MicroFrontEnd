import React, {  useEffect } from 'react';

function Specs() {
  useEffect(() => {
    // Simula una carga de datos (puede ser una solicitud HTTP, por ejemplo)
    setTimeout(() => {
      document.getElementById("button-specs").style.color = "black";
    }, 0); // Simulación de carga durante 2 segundos
  }, []);
  return (
    <div>
      hola
    </div>
  );
}

export default Specs;
