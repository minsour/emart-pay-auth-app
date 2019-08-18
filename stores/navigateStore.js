import { observable, action } from 'mobx';

class NavigateStore {
  @observable login = false;
  @observable auth = false;
  @observable qr = false;

  @action navigateMain = () => {
    this.login = false;
  }
  
  @action navigateAuth = () => {
    this.auth = false;
  }

  @action navigateQr = () => {
    this.qr = false;
  }
}

export default NavigateStore;