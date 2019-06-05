import { observable, action } from 'mobx';

class ClickEventStore {
  @observable signUp = false;
  @observable signIn = false;
  @observable auth = false;
  @observable loginSwitch = true;
  @observable visible = {
    'transfer': false,
  }
  @observable fingerPrint = {
    'transfer': false,
  }

  @action showLoading = (key) => {
    this.visible[key] = true  
  }
  @action hideLoading = (key) => {
    this.visible[key] = false
  }
}

export default ClickEventStore;