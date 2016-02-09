import d3 from 'd3';

class Line {
  constructor() {
    this.dataSeries = null;
    this.define();
  }

  define(x, y) {
    this.dataSeries = d3.svg.line()
      .x(function(d) {
        return x(d.time);
      })
      .y(function(d) {
        return y(d.distance);
      });

    return this.dataSeries;
  }

  render(data, svg) {
    // remove old line
    svg.selectAll('.line')
      .remove();

    svg.append("path")
      .datum(data)
      .attr({
        class: 'line',
        d: this.dataSeries,
        fill: 'none',
        'stroke-width': 2,
        stroke: 'black'
      })
      .attr("class", "line")
      .attr("d", this.dataSeries)
  }
}

export default Line
