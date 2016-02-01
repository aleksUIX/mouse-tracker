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
        partial += `<li>item.time, item.distance</li>`;
      });
    }
    console.log(partial);
    //this.$el.innerHTML = partial;
  }

}
