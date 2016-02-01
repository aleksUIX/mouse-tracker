import MouseMove from '../modules/MouseMove';
import CalculateDistance from '../helpers/CalculateDistance';
import DistanceModel from '../models/DistanceModel';


export default class DistanceService {
  constructor() {
    this.calculateDistance = new CalculateDistance();
    this.startService();

    this.data = [];
  }

  startService() {
    const calculate = this.calculateDistance.calculate;
    const push = this.pushData;

    this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      const distance = calculate(data.coords);
      const newEntry = new DistanceModel(distance, new Date());
      console.log(newEntry);

      //push(distance);
    });
  }

  pushData(entry) {
    console.log(this.data)
  }
}
