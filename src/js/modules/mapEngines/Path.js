import d3 from 'd3';

export default class PathMap {
  constructor() {

  }

  Update(svg) {
    return function(data, x, y, series) {
      var path = d3.svg.line()
        .x(function(d) {
          return x(d.x);
        })
        .y(function(d) {
          return y(d.y);
        });

      path = svg.append("path")
          .datum(data)
          .attr({
            class: 'line',
            d: path,
            fill: 'none',
            'stroke-width': 2,
            stroke: 'black'
          })
          .attr("class", "line")
          .attr("d", path);
    }
  }
}
