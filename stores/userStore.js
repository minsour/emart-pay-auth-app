import { observable, action } from 'mobx';

class UserStore {
  @observable token = '';
  @observable auth = '';
}

export default UserStore;