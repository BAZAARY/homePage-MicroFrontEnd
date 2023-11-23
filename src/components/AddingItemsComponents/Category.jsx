import React, {  useEffect } from 'react';

function Category() {
  useEffect(() => {
    // Simula una carga de datos (puede ser una solicitud HTTP, por ejemplo)
    setTimeout(() => {
      document.getElementById("button-category").style.color = "black";
    }, 0); // Simulación de carga durante 2 segundos
  }, []);
  return (
    <div>
      cat
    </div>
  );
}

export default Category;
