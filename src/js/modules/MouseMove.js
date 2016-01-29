

const mousestop = new Event('mousestop');
const windowObject = window || {};
let timer, startCoords, endCoords;

export default class MouseMove{
  constructor() {
    this.captureEvents();
  }

  captureEvents() {
    const self = this;

    // start tracking mouse position
    windowObject.addEventListener('mousemove', function(e) {
      if (startCoords === null || !startCoords)
        startCoords = [e.pageX, e.pageY];

      endCoords = [e.pageX, e.pageY];
      self.mouseStartTimer(startCoords, endCoords);
    });

    // handle the coordinates
    windowObject.addEventListener('mousestop', function(e) {
      // need to calculate and save distance here
    })
  }

  mouseStartTimer(coords) {
    if (timer)
      clearTimeout(timer);

    timer = setTimeout(function() {
      mousestop.coords = {
        start: startCoords,
        end: endCoords
      };
      windowObject.dispatchEvent(mousestop);
      startCoords = null;
    }, 100);
  }
}
