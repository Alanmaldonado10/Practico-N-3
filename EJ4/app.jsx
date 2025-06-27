function App() {
  const [activo, setActivo] = React.useState("izquierdo");

  const alternar = (boton) => {
    setActivo(boton === "izquierdo" ? "derecho" : "izquierdo");
  };

  return (
    <div>
      <h1>Botones Alternados</h1>
      <button
        onClick={() => alternar("izquierdo")}
        disabled={activo !== "izquierdo"}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          opacity: activo === "izquierdo" ? 1 : 0.5,
        }}
      >
        Izquierdo
      </button>
      <button
        onClick={() => alternar("derecho")}
        disabled={activo !== "derecho"}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          opacity: activo === "derecho" ? 1 : 0.5,
        }}
      >
        Derecho
      </button>
    </div>
  );
}
