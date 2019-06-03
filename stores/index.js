import NavigateStore from './navigateStore.js';
import ClickEventStore from './clickEventStore';

export class RootStore {
  constructor() {
    this.navigateStore = new NavigateStore();
    this.clickEventStore = new ClickEventStore();
  }
}