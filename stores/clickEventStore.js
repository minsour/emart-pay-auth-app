import { observable, action } from 'mobx';

class ClickEventStore {
  @observable signUp = false;
  @observable signIn = false;
  @observable auth = false;
  @observable loginSwitch = true;
}

export default ClickEventStore;