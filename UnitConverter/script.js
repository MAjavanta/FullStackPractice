const input = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const lengthP = document.getElementById("length-conversion");
const volumeP = document.getElementById("volume-conversion");
const massP = document.getElementById("mass-conversion");

input.addEventListener("input", resizeInput);
resizeInput.call(input);

convertBtn.addEventListener("click", () => {
  let inputNumber = Number(input.value);
  console.log(inputNumber);
  convertLength(inputNumber);
  convertVolume(inputNumber);
  convertMass(inputNumber);
});

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

function convertLength(inputNumber) {
  const metreToFeetRatio = 3.281;
  const convertedFtValue = roundedMultiply(inputNumber, metreToFeetRatio);
  const convertedMValue = roundedDivide(inputNumber, metreToFeetRatio);
  lengthP.innerText = `${inputNumber} metres = ${convertedFtValue} feet | ${inputNumber} feet = ${convertedMValue} metres`;
}

function convertVolume(inputNumber) {
  const litreToGallonRatio = 0.2199;
  const convertedGlValue = roundedMultiply(inputNumber, litreToGallonRatio);
  const convertedLtValue = roundedDivide(inputNumber, litreToGallonRatio);
  volumeP.innerText = `${inputNumber} litres = ${convertedGlValue} gallons | ${inputNumber} gallons = ${convertedLtValue} litres`;
}

function convertMass(inputNumber) {
  const kgToLbsRatio = 2.205;
  const convertedLbsValue = roundedMultiply(inputNumber, kgToLbsRatio);
  const convertedKgsValue = roundedDivide(inputNumber, kgToLbsRatio);
  massP.innerText = `${inputNumber} kilograms = ${convertedLbsValue} pounds | ${inputNumber} pounds = ${convertedKgsValue} kilograms`;
}

function roundedMultiply(initialNumber, multiplier) {
  return (initialNumber * multiplier).toFixed(2);
}

function roundedDivide(initialNumber, divisor) {
  return (initialNumber / divisor).toFixed(2);
}
