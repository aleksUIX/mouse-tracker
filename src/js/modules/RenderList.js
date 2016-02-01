import DistanceService from '../services/DistanceService';


export default class RenderList {
  constructor(el) {
    this.distance = new DistanceService();
    this.distance.setUpdate(this.render)
    this.$el = document.getElementById('el');
  }

  render(data) {
    let partial = '';
    if (data) {
      data.forEach((item) => {
        const time = item.time;
        const timePartial = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}, ${time.getDay()} ${time.getMonth()}`;
        partial += `<li>${timePartial}, ${item.distance}</li>`;
      });
    }
    console.log(partial);
    //this.$el.innerHTML = partial;
  }

}
