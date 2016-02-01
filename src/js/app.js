import DistanceService from './services/DistanceService';



export default class App {
  constructor() {
    this.distance = new DistanceService();
  }
  initEvent() {
  }
}
