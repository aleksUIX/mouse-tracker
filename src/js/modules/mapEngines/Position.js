import d3 from 'd3';

export default class PositionMap {
  constructor() {

  }

  Update(svg) {
    return function(data, x, y, series) {
      svg.selectAll('circle').remove()
      var d = data[data.length-1];
      svg.append('circle')
          .attr({
            cx: x(d.x),
            cy: y(d.y),
            r: '10',
            fill: "black"
          });

    }
  }
}
