import NavigateStore from './navigateStore.js';
import ClickEventStore from './clickEventStore';
import CameraStore from './cameraStore.js';
import UserStore from './userStore.js';

export class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.cameraStore = new CameraStore();
    this.navigateStore = new NavigateStore();
    this.clickEventStore = new ClickEventStore();
  }
}