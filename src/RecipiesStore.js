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
  @observable showModal = false;
  

  addRecipe(recipeObject){
    this.recipies.push(new RecipeType(recipeObject));
  }

  deleteRecipe(index) {
    this.recipies.splice(index, 1);
  }

  updateRecipe(obj, index) {
    this.recipies[index] = new RecipeType(obj);
  }

  openModal(){
    this.showModal = true;
  }

  CloseModal(){
    this.showModal = false;
  }
}

var store = window.store = new RecipiesStore;
export default store;
