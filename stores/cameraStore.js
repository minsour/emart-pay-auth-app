import { observable, action } from 'mobx';

class CameraStore {
  @observable photo = { 
    'idCard': '', 
    'faceImage': ''
  };
  @observable camera = { 
    'idCard': false, 
    'faceImage': false
  };

  @action showCamera = (key) => {
    this.camera[key] = true;
  };
  
  @action hideCamera = (key) => {
    this.camera[key] = false;
  };
};

export default CameraStore;