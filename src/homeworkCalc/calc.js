const operandAElement = document.querySelector(".calculator__operand_a");
const operandBElement = document.querySelector(".calculator__operand_b");
const operatorAddElement = document.querySelector(".calculator__operator_add");
const operatorMinusElement = document.querySelector(
  ".calculator__operator_minus"
);
const operatorMultiplicatorElement = document.querySelector(
  ".calculator__operator_multiplicator"
);
const operatorDivisionElement = document.querySelector(
  ".calculator__operator_division"
);
const operatorRootElement = document.querySelector(
  ".calculator__operator_root"
);
const operatorResetElement = document.querySelector(
  ".calculator__operator_reset"
);
const outputElement = document.querySelector(".calculator__result");
function add() {
  const a = Number(operandAElement.value);
  const b = Number(operandBElement.value);
  if (validate(a, b)) {
    print(a + b);
  }
}
function sub() {
  const a = Number(operandAElement.value);
  const b = Number(operandBElement.value);
  if (validate(a, b)) {
    print(a - b);
  }
}
function multi() {
  const a = Number(operandAElement.value);
  const b = Number(operandBElement.value);
  if (validate(a, b)) {
    print(a * b);
  }
}
function division() {
  const a = Number(operandAElement.value);
  const b = Number(operandBElement.value);
  if (validate(a, b)) {
    print(a / b);
  }
}
function root() {
  const a = Number(operandAElement.value);
  const b = Number(operandBElement.value);
  if (validate(a, b)) {
      print( Math.pow(a,b));
  }
}
function print(data) {
  outputElement.textContent = "RESULT:" + data;
}
function validate(a, b) {
  let isValid = true;
  if (Boolean(a) === false) {
    operandAElement.classList.add("calculator__operand_error");
    isValid = false;
  }
  if (Boolean(b) === false) {
    operandBElement.classList.add("calculator__operand_error");
    isValid = false;
  }
  return isValid;
}
function clearClassListA() {
  operandAElement.classList.remove("calculator__operand_error");
}
function clearClassListB() {
  operandBElement.classList.remove("calculator__operand_error");
}
function clearClassLists() {
  clearClassListA();
  clearClassListB();
}
function clearValues() {
  operandAElement.value = "";
  operandBElement.value = "";
  outputElement.textContent = "";
}
function clear() {
  clearClassLists();
  clearValues();
}
operandAElement.oninput = clearClassListA;
operandBElement.oninput = clearClassListB;
operatorAddElement.onclick = add;
operatorMinusElement.onclick = sub;
operatorResetElement.onclick = clear;
operatorMultiplicatorElement.onclick = multi;
operatorDivisionElement.onclick = division;
operatorRootElement.onclick = root;
