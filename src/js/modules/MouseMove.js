

const mousestop = new Event('mousestop');
const windowObject = window || {};
let timer, endCoords;

export default class MouseMove {
  constructor() {
    this.startCoords = null;

    this.captureEvents();
  }

  captureEvents() {
    const self = this;

    // start tracking mouse position
    windowObject.addEventListener('mousemove', function(e) {
      if (self.startCoords === null || !self.startCoords)
        self.startCoords = [e.pageX, e.pageY];

      self.mouseStartTimer(self.startCoords, [e.pageX, e.pageY]);
    });

    // handle the coordinates
    windowObject.addEventListener('mousestop', function(e) {
      console.log(e.coords);
      // need to calculate and save distance here
    });
  }

  mouseStartTimer(startCoords, endCoords) {
    const self = this;

    if (timer)
      clearTimeout(timer);

    timer = setTimeout(function() {
      mousestop.coords = {
        start: startCoords,
        end: endCoords
      };
      windowObject.dispatchEvent(mousestop);
      self.startCoords = null;
    }, 100);
  }
}
