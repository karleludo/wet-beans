//initialize dom elements
const ratioCoffee = document.getElementById("ratio-coffee");
const ratioWater = document.getElementById("ratio-water");
const recipeCoffee = document.getElementById("recipe-coffee");
const recipeWater = document.getElementById("recipe-water");

//instantiate some objects
let objectRatioCoffee = {};
let objectRatioWater = {};
let objectRecipeCoffee = {};
let objectRecipeWater = {};

//bind input to object for data-binding
Object.defineProperty(objectRatioCoffee, "value", {
  get() {
    return parseInt(ratioCoffee.value);
  },
  set(newValue) {
    ratioCoffee.value = newValue;
  },
});
Object.defineProperty(objectRatioWater, "value", {
  get() {
    return parseInt(ratioWater.value);
  },
  set(newValue) {
    ratioWater.value = newValue;
  },
});
Object.defineProperty(objectRecipeCoffee, "value", {
  get() {
    return parseInt(recipeCoffee.value);
  },
  set(newValue) {
    recipeCoffee.value = newValue;
  },
});
Object.defineProperty(objectRecipeWater, "value", {
  get() {
    return parseInt(recipeWater.value);
  },
  set(newValue) {
    recipeWater.value = newValue;
  },
});

//set initial values
objectRatioCoffee.value = 3;
objectRatioWater.value = 50;
objectRecipeCoffee.value = 15;


let getResultWater = () => {
  let result;
  result =
    (objectRatioWater.value / objectRatioCoffee.value) *
    objectRecipeCoffee.value;
  result = objectRecipeWater.value = Math.round(result);
  return result;
};

// set inital value of objectRecipeWater from default initial values
getResultWater();

let getResultCoffee = () => {
  let result;
  result =
    objectRecipeWater.value /
    (objectRatioWater.value / objectRatioCoffee.value);
  objectRecipeCoffee.value = result;
  return result;
};

//handle recipeCoffee input change
let recipeCoffeeChangeHandler = function () {
  getResultWater();
};
//handle recipeWater input change
let recipeWaterChangeHandler = function () {
  getResultCoffee();
};

let ratioChangeHandler = function () {
  getResultCoffee();
  getResultWater();
};

//eventlisteners for different browsers?
if (recipeCoffee.addEventListener)
  recipeCoffee.addEventListener("change", recipeCoffeeChangeHandler, false);
else if (recipeCoffee.attachEvent)
  recipeCoffee.attachEvent("onchange", recipeCoffeeChangeHandler);
else recipeCoffee.onchange = recipeCoffeeChangeHandler;

if (recipeWater.addEventListener)
  recipeWater.addEventListener("change", recipeWaterChangeHandler, false);
else if (recipeWater.attachEvent)
  recipeWater.attachEvent("onchange", recipeWaterChangeHandler);
else recipeWater.onchange = recipeWaterChangeHandler;


//adding change event to both ratio inputs
if (ratioCoffee.addEventListener)
  ratioCoffee.addEventListener("change", ratioChangeHandler, false);
else if (recipeWater.attachEvent)
  ratioCoffee.attachEvent("onchange", ratioChangeHandler);
else ratioCoffee.onchange = ratioChangeHandler;

if (ratioWater.addEventListener)
  ratioWater.addEventListener("change", ratioChangeHandler, false);
else if (recipeWater.attachEvent)
  ratioWater.attachEvent("onchange", ratioChangeHandler);
else ratioWater.onchange = ratioChangeHandler;