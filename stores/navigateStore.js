import { observable, action } from 'mobx';

class NavigateStore {
  @observable login = false;
  @observable auth = false;

  @action navigateMain = () => {
    this.login = false;
  }
  
  @action navigateAuth = () => {
    this.auth = false;
  }
}

export default NavigateStore;