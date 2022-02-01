"use strict";
let ratioWater;
let ratioCoffee;
let resultCoffee = 15;
let resultWater;
// document.getElementById("result-water");
// document.getElementById("result-coffee");
function setRatio() {
    ratioWater = +document.getElementById("ratio-water").value;
    ratioCoffee = +document.getElementById("ratio-coffee").value;
}
function getResult() {
    setRatio();
    resultCoffee = +document.getElementById("result-coffee").value;
    resultWater = resultCoffee * (ratioWater / ratioCoffee);
    document.getElementById("result-water").value = (Math.floor(resultWater)).toString();
}
