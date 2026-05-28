function ordenarNumeros() {
  // ingresa numeros aqui
  let num1 = parseFloat(prompt("Ingresa el primer numero:"));
  let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
  let num3 = parseFloat(prompt("Ingresa el tercer numero:"));

  if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
      centro = num2;
      menor = num3;
    } else {
      centro = num3;
      menor = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
      centro = num1;
      menor = num3;
    } else {
      centro = num3;
      menor = num1;
    }
  } else {
    mayor = num3;
    if (num1 >= num2) {
      centro = num1;
      menor = num2;
    } else {
      centro = num2;
      menor = num1;
    }
  }

  console.log(`mayor a menor: ${mayor}, ${centro}, ${menor}`);
  console.log(` menor a mayor: ${menor}, ${centro}, ${mayor}`);
}

ordenarNumeros();
