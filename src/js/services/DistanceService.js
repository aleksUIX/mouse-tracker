import MouseMove from '../modules/MouseMove';
import CalculateDistance from '../helpers/CalculateDistance';


export default class DistanceService {
  constructor() {
    this.calculateDistance = new CalculateDistance();
    this.startService();
  }

  startService() {
    const calculate = this.calculateDistance.calculate;

    this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      console.log(calculate(data));
    });
  }
}
