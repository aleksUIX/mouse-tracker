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
    var x = this.dataSeries.x,
      y = this.dataSeries.y,
      barWidth = 1; //x.range()[1] / data.length;

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
        x: (d) => {
          return x(d.time) - (barWidth / 2);
        },
        y: (d) => {
          return y.range()[1] - y(d.distance)
        },
        width: barWidth,
        height: (d) => {
          return y(d.distance);
        },
        fill: '#666666'
      });
  }

}

export default Bar
