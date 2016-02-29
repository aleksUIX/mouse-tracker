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
      height = 200,
      cx = 100,
      cy = 100,
      radius = 80;

    function draw() {
      // clean
      $el.selectAll('svg').remove();

      let dataPoint = data[data.length-1]
      let svg = $el.append('svg')
        .attr({
          width: width,
          height: height
        });

      svg.append('circle')
        .attr({
          cx: cx,
          cy: cy,
          r: radius,
          'stroke-width': '1',
          stroke: '#000000',
          fill: 'none'
        });

      // indicator circle that shows the direction
      svg.append('circle')
        .datum(dataPoint)
        .attr({
          cx: (d) => { return cx + radius * Math.cos(d.direction); },
          cy: (d) => { return cy + radius * Math.sin(d.direction); },
          r: 5,
          stroke: '#000000'
        });

      // path from middle of the chart to the indicator circle
      svg.append('line')
        .datum(dataPoint)
        .attr({
          x1: cx,
          y1: cy,
          x2: (d) => { return cx + radius * Math.cos(d.direction); },
          y2: (d) => { return cy + radius * Math.sin(d.direction); },
          'stroke-width': 1,
          stroke: '#000000'
        });

    }

    if (data && data.length)
      draw();
  }
}


export default RenderDirection;
