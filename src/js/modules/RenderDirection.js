import d3 from 'd3';
import MouseMoveService from '../services/MouseMoveService';


class RenderDirection {
  constructor(el) {
    this.direction = MouseMoveService;
    this.$el = document.getElementById(el);
  }

  render(data) {
    let $el = d3.select($el),
      width = 200,
      height = 200;

    function draw() {
      let svg = $el.append('svg')
        .attr({
          width: width,
          height: height
        });
    }

    console.log(data);
  }
}


export default RenderDirection;
