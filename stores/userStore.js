import { observable, action } from 'mobx';

class UserStore {
  @observable token = '';
}

export default UserStore;