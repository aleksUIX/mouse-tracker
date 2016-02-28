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
          cx: 100,
          cy: 100,
          r: 80,
          'stroke-width': '1',
          stroke: '#000000',
          fill: 'none'
        });

      // indicator circle that shows the direction
      svg.append('circle')
        .datum(dataPoint)
        .attr({
          cx: (d) => { return 100 + 80 * Math.cos(d.direction); },
          cy: (d) => { return 100 + 80 * Math.sin(d.direction); },
          r: 5,
          stroke: '#000000'
        });

      // path from middle of the chart to the indicator circle
      // svg.append('line')
      //   .datum(dataPoint);

    }

    if (data && data.length)
      draw();
  }
}


export default RenderDirection;
