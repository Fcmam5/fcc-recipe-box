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
  @observable tempName = '';
  @observable tempIngredients = '';
  @observable tempId = -1;


  addRecipe(recipeObject){
    this.recipies.push(new RecipeType(recipeObject));
  }

  deleteRecipe(index) {
    this.recipies.splice(index, 1);
  }

  updateRecipe(index) {
    this.recipies[index] = new RecipeType({
                                    name: this.tempName,
                                    ingredients: this.tempIngredients});
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
