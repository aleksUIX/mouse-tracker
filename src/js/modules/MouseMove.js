

export default class MouseMove{
  constructor() {
    console.log('sad')
    this.init();
  }
  init() {
    window.addEventListener('mousemove', function(e) {
      console.log(e);
    });
  }
}
