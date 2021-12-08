import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");
  return (
    <div>
      <h1>ErrorApp</h1>

      <button onClick={() => setError("Error al traer con la API")}>
        Error
      </button>

      <button onClick={() => setError("Credenciales incorrectas")}>
        Another Error
      </button>

      <button onClick={() => setError("")}>
        Proceso Exitoso</button>

      {error && <h1>{error}</h1>}

    </div>
  );
};

export default ErrorApp;
