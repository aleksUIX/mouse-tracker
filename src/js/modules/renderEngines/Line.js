class Line {
  constructor() {

  }

  defineLine() {
    line = d3.svg.line()
      .x(function(d) {
        return x(d.time);
      })
      .y(function(d) {
        return y(d.distance);
      });
  }

  renderFunction() {
    // remove old line
    svg.selectAll('.line')
      .remove();

    svg.append("path")
      .datum(data)
      .attr({
        class: 'line',
        d: line,
        fill: 'none',
        'stroke-width': 2,
        stroke: 'black'
      })
      .attr("class", "line")
      .attr("d", line)
  }
}

export default Line
