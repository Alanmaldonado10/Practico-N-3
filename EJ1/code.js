 function verificarDivision() {
      const operacion = document.getElementById("operacion").value;
      const numero2 = parseFloat(document.getElementById("numero2").value);
      const boton = document.getElementById("botonCalcular");
      const resultado = document.getElementById("resultado");

      if (operacion === "division" && numero2 === 0) {
        boton.disabled = true;
        resultado.textContent = "No es posible dividir entre 0";
      } else {
        boton.disabled = false;
        resultado.textContent = "---";
      }
    }

    function calcular() {
      const numero1 = document.getElementById("numero1").value;
      const numero2 = document.getElementById("numero2").value;
      const operacion = document.getElementById("operacion").value;
      const resultadoElemento = document.getElementById("resultado");
      const boton = document.getElementById("botonCalcular");

      if (numero1 === "") {
        alert("Complete el campo de número 1");
        return;
      }

      if (numero2 === "") {
        alert("Complete el campo de número 2");
        return;
      }

      const n1 = parseFloat(numero1);
      const n2 = parseFloat(numero2);

      if (operacion === "division" && n2 === 0) {
        
        boton.disabled = true;
        resultadoElemento.textContent = "No es posible dividir entre 0";
        return;
      }

      const operaciones = {
        suma: (a, b) => a + b,
        resta: (a, b) => a - b,
        multiplicacion: (a, b) => a * b,
        division: (a, b) => a / b
      };

      const resultado = operaciones[operacion](n1, n2);
      resultadoElemento.textContent = resultado;
    }