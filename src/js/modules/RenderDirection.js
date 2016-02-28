import d3 from 'd3';
import MouseMoveService from '../services/MouseMoveService';


class RenderDirection {
  constructor(el) {
    this.mouseService = MouseMoveService;
    this.$el = document.getElementById(el);

    this.mouseService.registerCallback(this.render.bind(this));
  }

  render(data) {
    let $el = d3.select(this.$el),
      width = 200,
      height = 200;

    function draw() {
      $el.selectAll('svg').remove();

      let svg = $el.append('svg')
        .attr({
          width: width,
          height: height
        });

      svg.append('circle')
        .attr({
          cx: 100,
          cy: 100,
          r: 80,
          'stroke-width': '1',
          stroke: '#000000',
          fill: 'none'
        });

      svg.append('circle')
        .datum(data[data.length-1])
        .attr({
          cx: (d) => { return 100 + 80 * cos(d.direction); },
          cy: (d) => { return 100 + 80 * sin(d.direction); },
          r: 10,
          stroke: '#000000'
        });

      console.log();

    }

    if (data && data.length)
      draw();
  }
}


export default RenderDirection;
