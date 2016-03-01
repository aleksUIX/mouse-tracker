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

      var calcCx = (d) => {
         return cx + radius * Math.cos(d.direction);
      }

      var calcCy = (d) => {
         return cy + radius * Math.sin(d.direction);
      }

      // indicator circle that shows the direction
      // TODO: swap circle for an arrow
      // svg.append('circle')
      //   .datum(dataPoint)
      //   .attr({
      //     r: 5,
      //     stroke: '#000000'
      //   });

      // arrow path code
      svg.append('g')
        .datum(dataPoint)
        .attr({
          transform: '(0,0)'
        })
        .append('path')
        .attr({
          d: "M 100 100 L 90 95 L 110 100 L 90 105 z",
          fill: "#000000",
          x: calcCx,
          y: calcCy
        });

      // path from middle of the chart to the indicator circle
      svg.append('line')
        .datum(dataPoint)
        .attr({
          x1: cx,
          y1: cy,
          x2: calcCx,
          y2: calcCy,
          'stroke-width': 1,
          stroke: '#000000'
        });

    }

    if (data && data.length)
      draw();
  }
}


export default RenderDirection;
