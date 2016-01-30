

const mousestop = new Event('mousestop');

export default class MouseMove {
  constructor() {
    this.startCoords = null;
    this.timer = null;
    this.windowObject = window || {};

    this.captureEvents();
  }

  captureEvents() {
    // start tracking mouse position
    this.windowObject.addEventListener('mousemove', this.mouseMoveHandler.bind(this));

    // handle the coordinates
    this.windowObject.addEventListener('mousestop', this.mouseStopHandler.bind(this));
  }

  mouseMoveHandler(e) {
    if (this.startCoords === null || !this.startCoords)
      this.startCoords = [e.pageX, e.pageY];

    this.mouseStartTimer(this.startCoords, [e.pageX, e.pageY]);
  }

  mouseStopHandler(e) {
    console.log(e.coords);
    // TODO: need to calculate and save distance here
  }

  mouseStartTimer(startCoords, endCoords) {
    // if there is an existing timer
    // destroy it so that a continuous motion
    // is not counted as multiple movements
    if (this.timer)
      clearTimeout(this.timer);

    this.timer = setTimeout(timeoutHandler.bind(this), 100);

    // this function will reset the starting coordinates
    // and dispatch mouse stop event
    function timeoutHandler() {
      mousestop.coords = {
        start: startCoords,
        end: endCoords
      };
      this.windowObject.dispatchEvent(mousestop);
      this.startCoords = null;
    }

  }
}
