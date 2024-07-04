import React, { useState } from "react";
import Fetch from "./components/fetch";

function App() {

  const [selectedEndpoint, setSelectedEndpoint] = useState("planetary/apod");//estado para manejar el endpoint seleccionado

  //endpoints disponibles
  const endpoints = [
    { name: "Imagen astronómica del día", value: "planetary/apod" },
    { name: "Asteroides", value: "neo/rest/v1/feed" },
    { name: "Buscar videos", value: "search?q=apollo%2011" }
  ];

  //manejador de eventos para el cambio de endpoint
  const handleEndpointChange = (event) => {
    setSelectedEndpoint(event.target.value);
  };


  return (
    <div div >
      <h1>NASA API</h1>
      <select value={selectedEndpoint} onChange={handleEndpointChange}>
        {endpoints.map((endpoint) => (
          <option key={endpoint.value} value={endpoint.value}>
            {endpoint.name}
          </option>
        ))}
      </select>
      <Fetch endpoint={selectedEndpoint} />
    </div >
  );
}

export default App;
