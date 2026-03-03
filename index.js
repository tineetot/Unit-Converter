const inputNumber = document.getElementById("input-number")
const convertButton = document.getElementById("convert")
let lengthConversion = document.getElementById("length-conversion")
let volumeConversion = document.getElementById("volume-conversion")
let massConversion = document.getElementById("mass-conversion")

convertButton.addEventListener("click", function() {
    // for length conversion
    const inputNumberValue = inputNumber.value
    const inputMeterValue = inputNumberValue + " meters"
    const inputFeetValue = inputNumberValue + " feet"
    lengthConversion.textContent = inputMeterValue + " = " + (inputNumberValue * 3.281).toFixed(3) + " | " + inputFeetValue + " = " + (inputNumberValue * 0.3048).toFixed(3)

    // for volume conversion
    const inputLitersValue = inputNumberValue + " liters"
    const inputGallonsValue = inputNumberValue + " gallons"
    volumeConversion.textContent = inputLitersValue + " = " + (inputNumberValue * 0.264).toFixed(3) + " | " + inputGallonsValue + " = " + (inputNumberValue * 3.785).toFixed(3)

    // for mass conversion
    const inputKilosValue = inputNumberValue + " kilos"
    const inputPoundsValue = inputNumberValue + " pounds"
    massConversion.textContent = inputKilosValue + " = " + (inputNumberValue * 2.204).toFixed(3) + " | " + inputPoundsValue + " = " + (inputNumberValue * 0.453).toFixed(3)
})