import { observable } from 'mobx';

class RecipeType {
  @observable name;
  @observable ingredients;

  constructor(initVal) {
    this.name = initVal.name;
    this.ingredients = initVal.ingredients;
  }
}

class RecipiesStore {
  @observable recipies = [];

  addRecipe(recipeObject){
    this.recipies.push(new RecipeType(recipeObject));
  }
}

var store = window.store = new RecipiesStore;
export default store;
