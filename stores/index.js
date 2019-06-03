import NavigateStore from './navigateStore.js';
import ClickEventStore from './clickEventStore';
import CameraStore from './cameraStore.js';

export class RootStore {
  constructor() {
    this.cameraStore = new CameraStore();
    this.navigateStore = new NavigateStore();
    this.clickEventStore = new ClickEventStore();
  }
}