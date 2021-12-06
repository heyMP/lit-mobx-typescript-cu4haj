import { observable, action, computed } from 'mobx';

// create a mobx observable
class Store {
  @observable
  public count = 1;

  @action
  public increment() {
    this.count++;
  }
}

export const store = new Store();
