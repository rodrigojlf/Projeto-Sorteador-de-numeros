
const quantity = document.getElementById("number-quantity")
const startNumber = document.getElementById("number-start")
const endNumber = document.getElementById("number-end")
const calculateButton = document.querySelector("button")

const quantityRegex = /^([1-9]|10)$/
let lastValideValue = ""

calculateButton.addEventListener('click', (event) => {
  event.preventDefault()
  calculate()
})

function calculate() {
  if (quantity.value === "" || startNumber.value === "" || endNumber.value === "") {
    alert("Preencha todos os campos!")
  } else {
    alert("tudo ok")
  }
}

// quantity.oninput = () => {
//   let value = quantity.value.replace(/\D/g, "")
//   quantity.value = value
// }










// Inicializa caso a página já carregue com um valor
if (quantityRegex.test(quantity.value.replace(/\D/g, ""))) {
  lastValideValue = quantity.value.replace(/\D/g, "");
} else if (quantity.value !== "") {
  quantity.value = "";
}

quantity.oninput = () => {
  let valorSanitizado = quantity.value.replace(/\D/g, "");

  if (valorSanitizado === "") {
    lastValideValue = "";
    quantity.value = "";
    return;
  }
  
  if (quantityRegex.test(valorSanitizado)) {
    lastValideValue = valorSanitizado;
    quantity.value = valorSanitizado;
  } else {
    quantity.value = lastValideValue;
  }
};