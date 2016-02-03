import DistanceService from '../services/DistanceService';


export default class RenderList {
  constructor(el) {
    this.distance = new DistanceService();
    this.$el = document.getElementById(el);
    this.distance.registerCallback(this.render.bind(this));
  }

  render(data) {
    let partial = '';
    if (data) {
      console.log(data);

      data.forEach((item) => {
        const time = item.time;
        const timePartial = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        partial += `<li>on ${timePartial}, the mouse travelled ${item.distance}cm</li>`;
      });
      this.$el.innerHTML = partial;
    }
  }

}
