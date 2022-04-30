console.log('this is working');
const pine = document.querySelector(".pine");
const larch = document.querySelector(".larch");
const balau = document.querySelector(".balau");
const materialName = document.querySelector('.material-name');
const materialList = document.getElementById('material-list');
const materialListPatio = document.getElementById('material-list-patio');
const materialItem = document.getElementsByClassName('btn-item');
const lengthInput = document.querySelector('length');
const materialLenght = Number(document.querySelector('m-lenght'));
const materialWidth = Number(document.querySelector('m-width'));
const materialHeight = Number(document.querySelector('m-height'));
const totalCost = document.querySelector('.total-cost');
const sumUpBtn = document.querySelector(".sum-up-btn");
const hiddenBtn = document.querySelector(".hidden");
//decking
const calculatorHeight = document.getElementById("calculator_height");
const calculatorWidth = document.getElementById("calculator_width");
const calculatorLength = document.getElementById("calculator_length");
const deckingButton = document.querySelector(".decking-btn")

//patio
const patioLength = document.querySelector(".p-length"); 
const patioWidth = document.querySelector(".p-width");
const patioSlabSize = document.querySelector(".p-size");
const patioValue = document.querySelector(".patio-cost");
const patioButton = document.querySelector(".patio-btn");

//turf
const lawnLength = document.querySelector(".t-length");
const lawnWidth = document.querySelector(".t-width");
const turfBtn = document.querySelector(".t-btn");
const turfValue = document.querySelector(".turf-cost");
const turfType = document.querySelector(".t-type");

//fence

const fenceLength = document.querySelector(".fence-length");
const fenceHight = document.querySelector(".fence-height");
const fenceValue = document.querySelector(".fence-cost");
const fenceButton = document.querySelector(".fence-button");

//estimated cost summary

let estimatedCost = document.querySelector(".total-figure");
let addedPrices = 0

 function materialCalculations (type) {
  switch (type) { 
    case 'decking':
      const widthValue = Number(calculatorWidth.value);
      const heightValue = Number(calculatorHeight.value);
      const lengthValue = Number(calculatorLength.value);

      let totalValue = lengthValue * widthValue;
      if (materialList.value === "pine-decking") {
        totalValue = "£" + totalValue * 150;
      } else if (materialList.value === "larch-decking") {
        totalValue = "£" + totalValue * 190;
      } else if (materialList.value === "balau-decking"){
        totalValue = "£" + totalValue * 250;
      } else {
        totalValue = "--N/A--"
      }
      totalCost.textContent = totalValue.toString();
      console.log(`decking inner value: ${totalCost.textContent}`);
      break;
      case 'patio':
        const patioWidthValue = Number(patioWidth.value);
        const patioLengthValue = Number(patioLength.value);
        let patioArea = patioWidthValue * patioLengthValue
        
        if (materialListPatio.value === "sawn-raj-green") {
          if (patioSlabSize.value === "300/300") {
              patioArea = patioArea * 200
          } else if (patioSlabSize.value === "300/450") {
            patioArea = patioArea * 180
          } else if (patioSlabSize.value === "300/600") {
            patioArea = patioArea * 170
          } else if (patioSlabSize.value === "600/600") {
            patioArea = patioArea * 160
          } else if (patioSlabSize.value === "600/900") {
            patioArea = patioArea * 175
          } else if (patioSlabSize.value === "4-random") {
            patioArea = patioArea * 220
          } else {
            patioArea = "--N/A--"
          };
        } else if (materialListPatio.value === "riven-mint") {

          switch (patioSlabSize.value) {
            case "300/300":
              patioArea = patioArea * 180
              break;
            case "300/450":
              patioArea = patioArea * 175
              break;
            case "300/600":
              patioArea = patioArea * 160
              break;
            case "600/600":
              patioArea = patioArea * 150
              break;
            case "600/900":
              patioArea = patioArea * 175
              break;
            case "4-random":
              patioArea = patioArea * 200
              break;
            case "":
              patioArea = "--N/A--"
              break;
          }
    
        } else if (materialListPatio.value === "sawn-kandela-grey") {
          switch (patioSlabSize.value) {
            case "300/300":
              patioArea = patioArea * 210
              break;
            case "300/450":
              patioArea = patioArea * 200
              break;
            case "300/600":
              patioArea = patioArea * 190
              break;
            case "600/600":
              patioArea = patioArea * 160
              break;
            case "600/900":
              patioArea = patioArea * 200
              break;
            case "4-random":
              patioArea = patioArea * 230
              break;
            case "":
              patioArea = "--N/A--"
              break;
          }
        } else {
          patioArea = "--N/A--"
        }
        patioValue.textContent = patioArea.toString()
        console.log(`patio inner value: ${patioValue.textContent}`);
      break;
    case 'turf':
      const lawnWidthValue = Number(lawnWidth.value);
      const lawnLengthValue = Number(lawnLength.value)
      let lawnArea = (lawnWidthValue * lawnLengthValue)
      console.log(lawnArea);
      switch (turfType.value) {
        case "essex-turf":
        lawnArea = lawnArea * 30
        break;
        case "medalion-turf":
          lawnArea = lawnArea * 35
          break;
        case "tough-sport-turf":
          lawnArea = lawnArea * 45
          break;
        case "":
          lawnArea = "--N/A--"
          break;
      }
      console.log(`after case statement ${typeof lawnArea}`);
      turfValue.textContent = lawnArea.toString()
      console.log(`turf inner value: ${turfValue.textContent}`);
      console.log(typeof turfValue);
      break;
    case 'fence':
      const fenceLenghtValue = Number(fenceLength.value)
      const fenceHeightValue = Number(fenceHight.value)
      let fenceTotal = (fenceLenghtValue + fenceHeightValue)*90
      fenceValue.textContent = fenceTotal.toString();
      console.log(`fence inner value: ${fenceValue.textContent}`);
      break;
  }
};

deckingButton.addEventListener('click', function (event) {
  event.preventDefault();
  materialCalculations('decking');
  console.log(`decking cost: ${estimatedCost.innerHTML}`);
  estimatedCost.textContent = totalCost.textContent
  addedPrices = estimatedCost.textContent
  return 

});

patioButton.addEventListener("click", function(event) {
event.preventDefault();
materialCalculations('patio');
console.log(`base cost: ${addedPrices}`);

const updatedEstimatedCost = Number(totalCost.textContent.substring(1));
const updatedPatioValue = Number(patioValue.textContent);
const updatedCost = updatedEstimatedCost + updatedPatioValue
 return estimatedCost.textContent = updatedCost.toString();
});

turfBtn.addEventListener("click", function(event) {
  event.preventDefault();
  materialCalculations('turf');
  console.log(`base cost: ${estimatedCost.textContent}`);

  const updatedEstimatedCost = Number(estimatedCost.textContent.substring(1));
  const updatedTurfValue = Number(turfValue.textContent.substring(1))
  const updatedCost = updatedEstimatedCost + updatedTurfValue
  console.log(`final figure ${estimatedCost.textContent}`);
  return estimatedCost.textContent =  updatedCost.toString();
});
fenceButton.addEventListener("click", function (event) {
  event.preventDefault()
  materialCalculations('fence');
  console.log(`fence cost: ${estimatedCost}`);
  const updatedEstimatedCost = Number(estimatedCost.textContent.substring(1));
  const updatedFenceValue = Number(fenceValue.textContent.substring(1))
  const updatedCost = updatedEstimatedCost + updatedFenceValue
   return estimatedCost.textContent = "£" + updatedCost.toString();
})