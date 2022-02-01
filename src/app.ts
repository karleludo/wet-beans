
let ratioWater: number;
let ratioCoffee: number;

let resultCoffee: number = 15;
let resultWater: number;
// document.getElementById("result-water");
// document.getElementById("result-coffee");

function setRatio():void {
    ratioWater = +(<HTMLInputElement>document.getElementById("ratio-water")).value;
    ratioCoffee = +(<HTMLInputElement>document.getElementById("ratio-coffee")).value;
}

function getResult():void {
    setRatio();
    resultCoffee = +(<HTMLInputElement>document.getElementById("result-coffee")).value;
    resultWater = resultCoffee *(ratioWater/ratioCoffee);
    (<HTMLInputElement>document.getElementById("result-water")!).value = (Math.floor(resultWater)).toString();
}


