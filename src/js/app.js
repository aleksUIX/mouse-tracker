import MouseMove from './modules/MouseMove';



export default class App {
  constructor() {
    this.initEvent();
  }
  initEvent() {
    const moveEvent = new MouseMove();
  }
}
