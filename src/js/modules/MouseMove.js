class MouseMove {
  constructor() {
    this.startCoords = null;
    this.timer = null;
    this.windowObject = window || {};
    this.mousestop = new Event('mousestop');
    this.externalHandler = null;

    // attach event handlers
    this.captureEvents();
  }

  registerHandler(callback) {
    this.externalHandler = callback;
  }

  captureEvents() {
    // event listeners
    this.windowObject.removeEventListener('mousemove');
    this.windowObject.removeEventListener('mousestop');
    this.windowObject.addEventListener('mousemove', mouseMoveHandler.bind(this));
    this.windowObject.addEventListener('mousestop', mouseStopHandler.bind(this));


    // event handlers
    function mouseMoveHandler(e) {
      if (this.startCoords === null || !this.startCoords)
        this.startCoords = [e.pageX, e.pageY];

      this.mouseStartTimer(this.startCoords, [e.pageX, e.pageY]);
    }

    function mouseStopHandler(e) {
      if (this.externalHandler !== null)
        this.externalHandler(e);
    }
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
      this.mousestop.coords = {
        start: startCoords,
        end: endCoords
      };
      this.windowObject.dispatchEvent(this.mousestop);
      this.startCoords = null;
    }

  }
}

export default new MouseMove();
