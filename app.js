
const ratioCoffee = document.getElementById("ratio-coffee");
let objectRatioCoffee = {};
const ratioWater = document.getElementById("ratio-water");
let objectRatioWater = {};
const recipeCoffee = document.getElementById("recipe-coffee");
let objectRecipeCoffee = {};
const recipeWater = document.getElementById("recipe-water");
let objectRecipeWater = {};
Object.defineProperty(objectRatioCoffee, "value", {
    get() {
        return parseInt(ratioCoffee.value);
    },
    set(newValue) {
        ratioCoffee.value = newValue;
    }
});
Object.defineProperty(objectRatioWater, "value", {
    get() {
        return parseInt(ratioWater.value);
    },
    set(newValue) {
        ratioWater.value = newValue;
    }
});
Object.defineProperty(objectRecipeCoffee, "value", {
    get() {
        return parseInt(recipeCoffee.value);
    },
    set(newValue) {
        recipeCoffee.value = newValue;
    }
});
Object.defineProperty(objectRecipeWater, "value", {
    get() {
        return parseInt(recipeWater.value);
    },
    set(newValue) {
        recipeWater.value = newValue;
    }
});
function CalculateRecipeCoffee() {
}
