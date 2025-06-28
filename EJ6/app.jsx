function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState(null);
  const [mensaje, setMensaje] = React.useState("");
  const [clase, setClase] = React.useState("");

  const calcularIMC = () => {
    if (peso === "" || altura === "") {
      alert("Complete ambos campos");
      return;
    }

    const p = parseFloat(peso);
    const h = parseFloat(altura);

    if (h === 0) {
      alert("La altura no puede ser cero");
      return;
    }

    const resultado = p / (h * h);
    const imcFinal = resultado.toFixed(2);
    setImc(imcFinal);


    if (resultado < 18.5) {
      setMensaje("Nivel bajo");
      setClase("amarillo");
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setMensaje("Nivel normal");
      setClase("verde");
    } else if (resultado >= 25 && resultado <= 29.9) {
      setMensaje("Nivel de sobrepeso");
      setClase("naranja");
    } else {
      setMensaje("Nivel de obesidad");
      setClase("rojo");
    }
  };

  return (
    <div className="contenedor">
      <h2>Calculadora de IMC</h2>

      <div>
        <label>
          Peso (kg):{" "}
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
      </div>
<br />
      <div>
        <label>
          Altura (m):{" "}
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            step="0.01"
          />
        </label>
      </div>
<br />
      <button onClick={calcularIMC}>Calcular</button>
<br />
      {imc && (
        <div>
          <p><strong>IMC:</strong> {imc}</p>
          <p className={clase}><strong>{mensaje}</strong></p>
        </div>
      )}
    </div>
  );
}