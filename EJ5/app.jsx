function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("sum");
  const [resultado, setResultado] = React.useState(null);

  const botonDeshabilitado = () => {
    return operacion === "div" && Number(num2) === 0;
  };

  const calcular = () => {
    if (num1 === "") {
      alert("Complete el campo de número 1");
      return;
    }
    if (num2 === "") {
      alert("Complete el campo de número 2");
      return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    const operaciones = {
      sum: (a, b) => a + b,
      sub: (a, b) => a - b,
      mul: (a, b) => a * b,
      div: (a, b) => a / b,
    };

    const res = operaciones[operacion](n1, n2);
    setResultado(res);
  };

  return (
    <div>
      <h1>Calculadora Simple</h1>

      <div>
        <label>
          Número 1:{" "}
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
<br />
      <div>
        <label>
          Número 2:{" "}
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
<br />
      <div>
        <label>
          Operación:{" "}
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
          >
            <option value="sum">Suma</option>
            <option value="sub">Resta</option>
            <option value="mul">Multiplicación</option>
            <option value="div">División</option>
          </select>
        </label>
      </div>
<br />
      <button
        onClick={calcular}
        disabled={botonDeshabilitado()}
      >
        Calcular
      </button>
<br />
      {botonDeshabilitado() && (
        <p>
          No es posible dividir entre 0
        </p>
      )}

      {resultado !== null && (
        <p>
          Resultado: {resultado}
        </p>
      )}
    </div>
  );
}
