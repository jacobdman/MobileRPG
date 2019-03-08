import { observable, decorate } from 'mobx';

class OptionsStore {
  currentOptions = 'mainOptions';
  customOptions = [];
  //****************Actions*****************************
  changeMenu = (menu, customOptions = []) => {
    this.currentOptions = menu;
    this.customOptions = customOptions;
  };
  move = direction => {
    // move in the direction
    this.currentOptions = 'mainOptions';
  };
}

export default decorate(new OptionsStore(), {
  currentOptions: observable,
  customOptions: observable,
});
