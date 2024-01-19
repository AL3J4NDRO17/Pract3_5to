document.addEventListener("DOMContentLoaded", () => {
    const resultado = document.getElementById("resultado");
    const buttons = document.querySelectorAll("button");
  
    let operacion = "";
    let valorAnterior = "";
    let operador = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.id === "clear") {
          resultado.value = "";
          operacion = "";
          valorAnterior = "";
          operador = "";
        } else if (button.id === "igual") {
          calcular();
        } else if (button.classList.contains("operacion")) {
          realizarOperacion(button.innerText);
        } else {
          resultado.value += button.innerText;
        }
      });
    });
  
    const realizarOperacion = (op) => {
      if (operacion !== "") {
        calcular();
      }
      operador = op;
      valorAnterior = resultado.value;
      operacion = `${valorAnterior} ${operador}`;
      resultado.value = "";
    };
  
    const calcular = () => {
      const valorActual = resultado.value;
      switch (operador) {
        case "+":
          resultado.value = parseFloat(valorAnterior) + parseFloat(valorActual);
          break;
        case "-":
          resultado.value = parseFloat(valorAnterior) - parseFloat(valorActual);
          break;
        case "X":
          resultado.value = parseFloat(valorAnterior) * parseFloat(valorActual);
          break;
        case "/":
          resultado.value = parseFloat(valorAnterior) / parseFloat(valorActual);
          break;
        default:
          break;
      }
      operacion = "";
      valorAnterior = resultado.value;
    };
  });
  