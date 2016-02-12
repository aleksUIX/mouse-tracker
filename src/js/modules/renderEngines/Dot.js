class Dot {
  constructor() {
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
      y = this.dataSeries.y;

    if (y.range()[0] !== 0)
      y.range([y.range()[1], y.range()[0]]);

    svg.selectAll('.dot')
      .remove();

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .classed('dot', true)
      .attr({
        x: (d) => {
          return x(d.time);
        },
        y: (d) => {
          return y.range()[1] - y(d.distance)
        },
        width: 2,
        height: 2
        fill: '#CCCCCC'
      });
  }
}


export default Dot;
