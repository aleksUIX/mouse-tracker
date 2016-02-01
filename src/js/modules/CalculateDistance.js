import MouseMove from './MouseMove';


export default class CalculateDistance {
  constructor() {
    this.init();
  }

  init() {
    this.mouseMove = new MouseMove();
    this.mouseMove.registerHandler(function(data) {
      console.log(data);
    });
  }


}
