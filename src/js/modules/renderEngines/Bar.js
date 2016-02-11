import d3 from 'd3';

class Bar {
  contructor() {
    this.dataSeries = null;
    // TODO: find a way to bind parent automatically
    this.render = this.render.bind(this);
    this.define = this.define.bind(this);
  }

  define(x, y) {
    var dataSeries = {
      x: x,
      y: y
    }


    this.dataSeries = dataSeries;
    return dataSeries;
  }

  render(data, svg) {
    // TODO: bar is rendering incorrectly,
    // needs a fix here
    var x = this.dataSeries.x,
      y = this.dataSeries.y;

    if (y.range()[0] !== 0)
      y.range([y.range()[1], y.range()[0]]);

    svg.selectAll('.bar')
      .remove();

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr({
        x: (d) => { return x(d.time); },
        y: (d) => { return y.range()[1] - y(d.distance) },
        width: 1, // TODO : come up with a better way to calculate width of the bars
        height: (d) => { return y(d.distance); },
        fill: '#CCCCCC'
      });
  }

}

export default Bar
