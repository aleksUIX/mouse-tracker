import DistanceService from '../services/DistanceService';


export default class RenderList {
  constructor(el) {
    this.distance = new DistanceService();
    this.$el = document.getElementById('data-list');
    this.distance.setUpdate(this.render.bind(this));
  }

  render(data) {
    let partial = '';
    if (data) {
      data.forEach((item) => {
        const time = item.time;
        const timePartial = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}, ${time.getDay()} ${time.getMonth()}`;
        partial += `<li>on ${timePartial}, the mouse travelled ${item.distance}cm</li>`;
      });
      this.$el.innerHTML = partial;
    }
  }

}
