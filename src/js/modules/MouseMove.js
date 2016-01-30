

const mousestop = new Event('mousestop');
const windowObject = window || {};

export default class MouseMove {
  constructor() {
    this.startCoords = null;
    this.timer = null;

    this.captureEvents();
  }

  captureEvents() {
    // start tracking mouse position
    windowObject.addEventListener('mousemove', this.mouseMoveHandler.bind(this));

    // handle the coordinates
    windowObject.addEventListener('mousestop', this.mouseStopHandler.bind(this));
  }

  mouseMoveHandler(e) {
    if (this.startCoords === null || !this.startCoords)
      this.startCoords = [e.pageX, e.pageY];

    this.mouseStartTimer(this.startCoords, [e.pageX, e.pageY]);
  }

  mouseStopHandler(e) {
    console.log(e.coords);
    // need to calculate and save distance here
  }

  mouseStartTimer(startCoords, endCoords) {
    if (this.timer)
      clearTimeout(this.timer);

    function timeoutHandler() {
      mousestop.coords = {
        start: startCoords,
        end: endCoords
      };
      windowObject.dispatchEvent(mousestop);
      this.startCoords = null;
    }

    this.timer = setTimeout(timeoutHandler.bind(this), 100);
  }
}
