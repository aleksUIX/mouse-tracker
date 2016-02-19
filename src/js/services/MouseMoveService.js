import MouseMove from '../modules/MouseMove';
import CalculateDistance from '../helpers/CalculateDistance';
import MouseMoveModel from '../models/MouseMoveModel';


class MouseMoveService {
  constructor() {
    this.data = [];
    this.calculateDistance = new CalculateDistance();
    this.update = null;
    this.callbacks = [];
    this.mouseMove = MouseMove;

    this.startService();
  }

  startService() {
    const calculate = this.calculateDistance.calculate;
    const push = this.pushData.bind(this);

    //this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      const distance = calculate(data.coords);
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

export default new MouseMoveService()
