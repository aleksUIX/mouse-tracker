import MouseMove from '../modules/MouseMove';
import CalculateDistance from '../helpers/CalculateDistance';
import DistanceModel from '../models/DistanceModel';


export default class DistanceService {
  constructor() {
    this.data = [];
    this.calculateDistance = new CalculateDistance();

    this.startService();
  }

  startService() {
    const calculate = this.calculateDistance.calculate;
    const push = this.pushData.bind(this);

    this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      const distance = calculate(data.coords);
      const newEntry = new DistanceModel(distance, new Date());

      push(newEntry);
    });
  }

  pushData(entry) {
    this.data.push(entry);
  }

  getData() {
    return this.data;
  }
}
