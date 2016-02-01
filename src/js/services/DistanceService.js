import MouseMove from '../modules/MouseMove';
import CalculateDistance from '../helpers/CalculateDistance';
import DistanceModel from '../models/DistanceModel';


export default class DistanceService {
  constructor() {
    this.calculateDistance = new CalculateDistance();
    this.startService();

    this.data = new DistanceModel();
  }

  startService() {
    const calculate = this.calculateDistance.calculate;

    this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      console.log(calculate(data));
    });
  }

  pushData(path) {
    this.data.totalDistance += path;
    this.data.lastPath = path;
  }
}
