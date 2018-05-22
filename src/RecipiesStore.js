import {autorun, observable} from 'mobx';

class RecipiesStore {
  @observable recipies = [
    {
      'name': 'bourak',
      'ingredients': 'dyoul, kefta, fromage'
    },
  ];
}

var store = window.store = new RecipiesStore;
export default store;
