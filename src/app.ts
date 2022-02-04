const ratioCoffee =  <HTMLInputElement>document.getElementById("ratio-coffee");

//ratio coffee initial value
let objectRatioCoffee: {
    value : number
} = {
    value: 3
}

// const ratioWater =  document.getElementById("ratio-water");
// const objectRatioWater = {};

// const recipeCoffee =  document.getElementById("recipe-coffee");
// const objectRecipeCoffee = {};

// const recipeWater =  document.getElementById("recipe-water");
// const objectRecipeWater = {};

Object.defineProperty(objectRatioCoffee, "value" , {
    get(){
        return ratioCoffee.value;
    },
    set(newValue){
        ratioCoffee.value = newValue;
        // ratioCoffee.value = newValue.toString();
        // 
    }
});

