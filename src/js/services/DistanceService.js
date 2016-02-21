import MouseMove from '../modules/MouseMove';
import CalculateDistance from '../helpers/CalculateDistance';
import CalculateDirection from '../helpers/CalculateDirection';
import MouseMoveModel from '../models/MouseMoveModel';


class DistanceService {
  constructor() {
    this.data = [];
    this.calculateDistance = new CalculateDistance();
    this.calculateDirection = new CalculateDirection();
    this.update = null;
    this.callbacks = [];
    this.mouseMove = MouseMove;

    this.startService();
  }

  startService() {
    const calculateDist = this.calculateDistance.calculate;
    const calculateDir = this.calculateDirection.calculate;
    const push = this.pushData.bind(this);

    //this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      const distance = calculateDist(data.coords);
      const direction = calculateDir(data.coords);
      const newEntry = new MouseMoveModel(distance, new Date());

      push(newEntry);
    });
  }

  registerCallback(callback) {
    this.callbacks.push(callback);
    this.setUpdate();
  }

  setUpdate() {
    this.update = function(data) {
      this.callbacks.forEach(function(callback) {
        callback(data);
      });
    };
  }

  pushData(entry) {
    this.data.push(entry);
    this.update(this.data);
  }

  getData() {
    return this.data;
  }
}

export default new DistanceService()
