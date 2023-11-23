import React, { useEffect, useState } from "react";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  // Supongamos que tienes una función para obtener los detalles de la factura desde tu microservicio.
  const fetchInvoiceData = async () => {
    try {
      const response = await fetch("API_URL"); //Cuando facturación tenga conexión, se pone la url de la api aquí para obtener los datos de la factura
      if (response.ok) {
        const data = await response.json();
        setInvoiceData(data);
      } else {
        console.error("No se pudo obtener la factura.");
      }
    } catch (error) {
      console.error("Error al obtener la factura:", error);
    }
  };

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  return (
    <div className="flex-row md:flex">
      <div className="flex ml-16 mt-24 w-5/6 h-screen">
        <div className="w-full h-3/4 bg-[#ffdcb7]">
          {/* Renderiza los detalles de la factura aquí */}
          {invoiceData ? (
            <div>
              <h1>Factura #{invoiceData.numeroFactura}</h1>
              <p>Fecha de Compra: {invoiceData.fechaCompra}</p>
              <h3>Productos:</h3>
              <ul>
                {invoiceData.productos.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} - ${producto.precio}
                  </li>
                ))}
              </ul>
              <p>Total: ${invoiceData.total}</p>
            </div>
          ) : (
            <p>Cargando factura...</p>
          )}
        </div>
      </div>
      <div className="flex w-1/4 mx-16 mt-24 h-screen justify-center">
        <div className="w-3/4 h-2/5 bg-[#ffdcb7]">
          {/* Aquí puedes agregar contenido adicional, como resumen, opciones de impresión, etc. */}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
